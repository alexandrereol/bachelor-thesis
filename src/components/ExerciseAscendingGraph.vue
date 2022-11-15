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
  console.log('not all reachable -> reloading')
  location.reload()
}

// CONDITION 1: CHECK IF EDGE IS THE MINIMUM EDGE
const ignoreList: number[] = []

function getArrayMin (array: number[]) {
  const difList = edgeWeights.filter(item => ignoreList.indexOf(item) < 0)
  return Math.min.apply(null, difList)
}

// CONDITION 2: CHECK IF EDGE FORMS CIRCLE
const mstAdjMatrix = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0))

function doesAddingEdgeFormCircle (matrix: number[][], source: number, target: number) {
  flag = false

  var tempMatrix = JSON.parse(JSON.stringify(matrix))
  tempMatrix[source][target] = 1
  tempMatrix[target][source] = 1

  for (var i = 0; i < matrix.length; i++) {
    for (var j = i; j < matrix.length; j++) {
      tempMatrix[i][j] = 0
    }
  }

  if (debugMode) {
    console.log('tempMatrix', tempMatrix)
  }

  // check for cycles
  for (let i = 0; i < matrix.length; i++) {
    visited = Array.from({ length: 10 }, () => false)
    dfs(tempMatrix, i)
  }
  return flag
}

let flag = false

function dfs (matrix: number[][], source: number) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[source][i] > 0) {
      // for all neighbours of source
      if (visited[i]) {
        console.log('flag set for souce/i: ' + source + '/' + i)
        flag = true
        return
      }
      visited[i] = true
      dfs(matrix, i)
    }
  }
}

// USER INTERACTION
function colorEdge () {
  if (selectedEdges.value.length === 0) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.'
    return
  }
  for (const edgeId of selectedEdges.value) {
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
    }

    // CONDITION 1: CHECK IF EDGE IS THE MINIMUM EDGE
    const minWeightGraph = getArrayMin(edgeWeights)
    if (debugMode) {
      console.log('')
      console.log('[DEBUG] minimum edge in graph: ' + minWeightGraph)
      console.log('[DEBUG] selected edge in graph: ' + edgeWeight)
      console.log('[DEBUG] condition 1 satisfied: ' + (edgeWeight === minWeightGraph))
    }
    if (edgeWeight !== minWeightGraph) {
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante nicht die preiswertigste Kante im Graphen ist.'
      return
    }

    const cond2 = doesAddingEdgeFormCircle(mstAdjMatrix, sourceNode, targetNode)
    if (debugMode) {
      console.log('')
      console.log('[DEBUG] checking cycles in MST')
      console.log('[DEBUG] condition 2 satisfied: ' + !cond2)
    }
    if (cond2) {
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante einen Kreis im minimalen Spannbaum bilden würde.'
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

    visited = Array.from({ length: 10 }, () => false)
    if (allReachable(mstAdjMatrix, 0)) {
      console.log('CORRECT; the m.s.t. has been found')
      infoBox.value = true
      infoBoxCorrect.value = true
      infoBoxMessage.value = 'Das ist richtig! Du hast den minimalen Spannbaum gefunden.'
    }

    // IGNORE LIST CALCULATION
    const flagToRemoveWeight = Array.from({ length: 20 }, () => 0)
    // 0: not done, 1: keep, 2: remove
    for (let i = 0; i < adjMatrix.length; i++) {
      for (let j = 0; j < adjMatrix.length; j++) {
        const weight = adjMatrix[i][j]
        if (weight > 0) {
          const flag = flagToRemoveWeight[weight - 1]
          if (flag !== 1) {
            const SCond1 = adjMatrix[i][j] === getArrayMin(edgeWeights)
            const SCond2 = doesAddingEdgeFormCircle(mstAdjMatrix, i, j)
            if (SCond1 && SCond2) {
              flagToRemoveWeight[weight - 1] = 2
            } else {
              flagToRemoveWeight[weight - 1] = 1
            }
          }
        }
      }
    }

    for (let i = 0; i < flagToRemoveWeight.length; i++) {
      if (flagToRemoveWeight[i] === 2) {
        ignoreList.push(i + 1)
      }
    }
  }
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
</template>

<style scoped>
.graph {
  width: 100%;
  height: 450px;
}
</style>
