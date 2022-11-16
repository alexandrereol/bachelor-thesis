<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { Nodes, Edges } from 'v-network-graph'
import data from './DataGeneratorType1'
import VerifierComp from './VerifierComp.vue'

const nodes: Nodes = reactive({ ...data.nodes })
const edges: Edges = reactive({ ...data.edges })

const customColor: boolean[][] = reactive({ ...data.customColor })

const selectedEdges = ref<string[]>([])
const edgeWeights = data.edgesWeight
const copyEdgeWeights = [...edgeWeights]

const debugMode = true

const infoBox = ref<boolean>(false)
const infoBoxCorrect = ref(false)
const infoBoxMessage = ref('nothing..?')

const adjMatrix: number[][] = [
  [0, edgeWeights[0], 0, edgeWeights[5], 0, 0, 0, 0, edgeWeights[14], 0],
  [edgeWeights[0], 0, edgeWeights[1], edgeWeights[6], edgeWeights[7], 0, 0, 0, 0, 0],
  [0, edgeWeights[1], 0, 0, edgeWeights[8], 0, 0, 0, 0, edgeWeights[16]],
  [edgeWeights[5], edgeWeights[6], 0, 0, edgeWeights[2], edgeWeights[9], edgeWeights[10], 0, 0, 0],
  [0, edgeWeights[7], edgeWeights[8], edgeWeights[2], 0, 0, edgeWeights[11], edgeWeights[12], 0, 0],
  [0, 0, 0, edgeWeights[9], 0, 0, edgeWeights[3], 0, edgeWeights[13], 0],
  [0, 0, 0, edgeWeights[10], edgeWeights[11], edgeWeights[3], 0, edgeWeights[4], 0, 0],
  [0, 0, 0, 0, edgeWeights[12], 0, edgeWeights[4], 0, 0, edgeWeights[15]],
  [edgeWeights[14], 0, 0, 0, 0, edgeWeights[13], 0, 0, 0, 0],
  [0, 0, edgeWeights[16], 0, 0, 0, 0, edgeWeights[15], 0, 0]
]

const mstAdjMatrix = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0))

const revAdjMatrix: string[][] = [
  ['', 'edge1', '', 'edge6', '', '', '', '', 'edge15', ''],
  ['edge1', '', 'edge2', 'edge7', 'edge8', '', '', '', '', ''],
  ['', 'edge2', '', '', 'edge9', '', '', '', '', 'edge17'],
  ['edge6', 'edge7', '', '', 'edge3', 'edge10', 'edge11', '', '', ''],
  ['', 'edge8', 'edge9', 'edge3', '', '', 'edge12', 'edge13', '', ''],
  ['', '', '', 'edge10', '', '', 'edge4', '', 'edge14', ''],
  ['', '', '', 'edge11', 'edge12', 'edge4', '', 'edge5', '', ''],
  ['', '', '', '', 'edge13', '', 'edge5', '', '', 'edge16'],
  ['edge15', '', '', '', '', 'edge14', '', '', '', ''],
  ['', '', 'edge17', '', '', '', '', 'edge16', '', '']
]

let visited = Array.from({ length: 10 }, () => false)

function allReachable (matrix: number[][], startNode: number) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[startNode][i] > 0 && visited[i] === false) {
      visited[i] = true
      allReachable(matrix, i)
    }
  }
  return !visited.includes(false)
}

for (var i = 0; i < adjMatrix.length; i++) {
  for (var j = i; j < adjMatrix.length; j++) {
    if (adjMatrix[i][j] >= 21) {
      const index = edgeWeights.indexOf(adjMatrix[i][j])
      edgeWeights.splice(index, 1)
      adjMatrix[i][j] = 0
      adjMatrix[j][i] = 0
      const toDelete = revAdjMatrix[i][j]
      delete edges[toDelete]
    }
  }
}
if (!allReachable(adjMatrix, 0)) {
  window.location.reload()
}

let flag = false
function doesAddingEdgeFormCircle (matrix: number[][], source: number, target: number) {
  flag = false
  var tempMatrix = JSON.parse(JSON.stringify(matrix))
  tempMatrix[source][target] = 1
  tempMatrix[target][source] = 1
  // check for cycles
  for (let i = 0; i < matrix.length; i++) {
    visited = Array.from({ length: 10 }, () => false)
    dfs(tempMatrix, i, -1)
  }
  return flag
}

function dfs (matrix: number[][], source: number, parent: number) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[source][i] > 0 && i !== parent) {
      // for all neighbours of source but not its parent
      if (visited[i]) {
        // already seen this node --> cycle
        flag = true
        return
      }
      // mark as visited and recurse
      visited[i] = true
      dfs(matrix, i, source)
    }
  }
}

function getCorrectWeight () {
  let min = 12345
  for (let i = 0; i < adjMatrix.length; i++) {
    for (let j = 0; j < adjMatrix.length; j++) {
      if (adjMatrix[i][j] > 0 && !doesAddingEdgeFormCircle(mstAdjMatrix, i, j) && adjMatrix[i][j] < min) {
        min = adjMatrix[i][j]
      }
    }
  }
  return min
}

// USER INTERACTION
function colorEdge () {
  if (debugMode) {
    console.log('AR: getCorrectWeight:')
    console.log('AR: ' + getCorrectWeight())
  }
  if (selectedEdges.value.length === 0) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.'
    return
  }
  const edgeId = selectedEdges.value[0]
  // deselect edge
  selectedEdges.value = []
  // get source, target and weight
  const sourceNode: number = +(edges[edgeId].source.replace('node', ''))
  const targetNode: number = +(edges[edgeId].target.replace('node', ''))
  const edgeWeight: number = +edges[edgeId].label
  if (debugMode) {
    console.log('[DEBUG] edge weight: ' + edgeWeight)
    console.log('[DEBUG] source node: ' + sourceNode)
    console.log('[DEBUG] target node: ' + targetNode)
    console.log('')
    console.log('[DEBUG] getCorrectWeight(): ' + getCorrectWeight())
  }

  if (edgeWeight !== getCorrectWeight()) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da es nicht die kleinste entfernbare Kante ist. Überprüfe deine Auswahl.'
    return
  }

  if (doesAddingEdgeFormCircle(mstAdjMatrix, sourceNode, targetNode)) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da es diese Kante einen Kreis im minimalen Spannbaum bilden würde. Überprüfe deine Auswahl.'
    return
  }

  customColor[sourceNode][targetNode] = true
  customColor[targetNode][sourceNode] = true
  adjMatrix[sourceNode][targetNode] = 0
  adjMatrix[targetNode][sourceNode] = 0
  mstAdjMatrix[sourceNode][targetNode] = 1
  mstAdjMatrix[targetNode][sourceNode] = 1

  const index = edgeWeights.indexOf(edgeWeight)
  edgeWeights.splice(index, 1)

  if (getCorrectWeight() === 12345) {
    console.log('CORRECT; the m.s.t. has been found')
    infoBox.value = true
    infoBoxCorrect.value = true
    infoBoxMessage.value = 'Das ist richtig! Du hast den minimalen Spannbaum gefunden.'
  }
  console.log('AR: getCorrectWeight:')
  console.log('AR: ' + getCorrectWeight())
}
</script>

<template>
  <v-network-graph class="graph" :nodes="nodes" :edges="edges" :layouts="data.layouts" :configs="data.configs"
    v-model:selected-edges="selectedEdges">
    <template #edge-label="{ edge, ...slotProps }">
      <v-edge-label :text="edge.label" text-align="center" vertical-align="center" v-bind="slotProps" />
    </template>
  </v-network-graph>

  <VerifierComp v-if="infoBox" :correctSolution="infoBoxCorrect" :tip="infoBoxMessage"
    @close-verifier="infoBox = false" />
  <button @click="colorEdge" class="next_task">
    <img src="../assets/icons/skip.png" class="icon" />
    <br />
    Kante färben
  </button>
  <p>{{ copyEdgeWeights }}</p>
</template>

<style scoped>
.graph {
  width: 100%;
  height: 450px;
}
</style>
