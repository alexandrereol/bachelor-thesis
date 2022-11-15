<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { Nodes, Edges } from 'v-network-graph'
import data from './DataGeneratorType1'
import VerifierComp from './VerifierComp.vue'

const nodes: Nodes = reactive({ ...data.nodes })
const edges: Edges = reactive({ ...data.edges })

const selectedEdges = ref<string[]>([])
const edgeWeights = data.edgesWeight
const copyEdgeWeights = [...edgeWeights]
const ignoreList: number[] = []

const debugMode = true

const infoBox = ref<boolean>(false)
const infoBoxCorrect = ref(false)
const infoBoxMessage = ref('nothing..?')

function getArrayMax (array: number[]) {
  const difList = edgeWeights.filter(item => ignoreList.indexOf(item) < 0)
  return Math.max.apply(null, difList)
}

// TODO: check adjacency matrix if correct
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
  console.log('not all reachable')
  window.location.reload()
}

function doesEdgeSplitGraph (source: number, target: number) {
  if (adjMatrix[source][target] < 0) {
    return false
  }
  visited = Array.from({ length: 10 }, () => false)
  var tempMatrix = JSON.parse(JSON.stringify(adjMatrix))
  tempMatrix[source][target] = 0
  tempMatrix[target][source] = 0
  return !(allReachable(tempMatrix, 0))
}

function calcIgnoreList () {
  for (let loop = 0; loop < adjMatrix.length; loop++) {
    // IGNORE LIST CALCULATION
    for (let i = 0; i < adjMatrix.length; i++) {
      for (let j = 0; j < adjMatrix.length; j++) {
        if (adjMatrix[i][j] > 0) {
          if (ignoreList.includes(adjMatrix[i][j])) {
            ignoreList.splice(ignoreList.indexOf(adjMatrix[i][j]), 1)
          }
          if (doesEdgeSplitGraph(i, j) && adjMatrix[i][j] === getArrayMax(edgeWeights)) {
            ignoreList.push(adjMatrix[i][j])
          }
        }
      }
    }

    const possiblyWrong = ignoreList[ignoreList.length - 1]
    const temp = edgeWeights.filter(function (value) { return value === possiblyWrong }).length
    if (temp > 1) {
      let tempResult = true
      for (let i = 0; i < adjMatrix.length; i++) {
        for (let j = 0; j < adjMatrix.length; j++) {
          if (adjMatrix[i][j] === possiblyWrong) {
            if (!doesEdgeSplitGraph(i, j)) {
              tempResult = false
            }
          }
        }
      }
      if (!tempResult) {
        ignoreList.splice(ignoreList.indexOf(possiblyWrong), 1)
      }
    }
  }
}

// USER INTERACTION
function removeEdge () {
  if (selectedEdges.value.length === 0) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.'
    return
  }
  calcIgnoreList()
  for (const edgeId of selectedEdges.value) {
    const sourceNode: number = +(edges[edgeId].source.replace('node', ''))
    const targetNode: number = +(edges[edgeId].target.replace('node', ''))
    const edgeWeight: number = +edges[edgeId].label
    const maxWeightGraph = getArrayMax(edgeWeights)
    if (debugMode) {
      console.log('[DEBUG] edge weight: ' + edgeWeight)
      console.log('[DEBUG] maximum edge in graph: ' + maxWeightGraph)
      console.log('[DEBUG] source node: ' + sourceNode)
      console.log('[DEBUG] target node: ' + targetNode)
    }

    if (doesEdgeSplitGraph(sourceNode, targetNode)) {
      console.log('WRONG; Graph would be divided:' + visited)
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante zwischen den beiden Knoten einen Teil des Graphen teilen würde.'
      return
    }

    if (edgeWeight !== maxWeightGraph) {
      console.log('WRONG; Edge is not the maximum edge in graph s.t. graph stays connected')
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante nicht die größte Kante im Graphen ist.'
      return
    }
    adjMatrix[sourceNode][targetNode] = 0
    adjMatrix[targetNode][sourceNode] = 0

    if (edgeWeight === maxWeightGraph) {
      const index = edgeWeights.indexOf(edgeWeight)
      edgeWeights.splice(index, 1)
      delete edges[edgeId]

      if (edgeWeights.length === 9) {
        console.log('CORRECT; the m.s.t. has the following edges' + edgeWeights)
        infoBox.value = true
        infoBoxCorrect.value = true
        infoBoxMessage.value = 'Das ist richtig! Du hast den minimalen Spannbaum gefunden.'
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
  <button @click="removeEdge" class="next_task">
    <img src="../assets/icons/skip.png" class="icon" />
    <br />
    Kante entfernen
  </button>
  <p>{{ copyEdgeWeights }}</p>
</template>

<style scoped>
.graph {
  width: 100%;
  height: 450px;
}
</style>
