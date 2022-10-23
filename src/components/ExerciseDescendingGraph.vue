<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { Nodes, Edges } from 'v-network-graph'
import data from './AlgDataGen'
import VerifierComp from './VerifierComp.vue'

const nodes: Nodes = reactive({ ...data.nodes })
const edges: Edges = reactive({ ...data.edges })

const selectedEdges = ref<string[]>([])
const edgeWeights = data.edgesWeight
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
  ['edge6', 'edge7', '', '', 'edge3', 'edge1', 'edge11', '', '', ''],
  ['', 'edge8', 'edge9', 'edge3', '', '', 'edge12', 'edge13', '', ''],
  ['', '', '', 'edge1', '', '', 'edge4', '', 'edge14', ''],
  ['', '', '', 'edge11', 'edge12', 'edge4', '', 'edge5', '', ''],
  ['', '', '', '', 'edge13', '', 'edge5', '', '', 'edge16'],
  ['edge15', '', '', '', '', 'edge14', '', '', '', ''],
  ['', '', 'edge17', '', '', '', '', 'edge16', '', '']
]

for (var i = 0; i < adjMatrix.length; i++) {
  for (var j = i; j < adjMatrix.length; j++) {
    if (adjMatrix[i][j] === 21) {
      const index = edgeWeights.indexOf(21)
      edgeWeights.splice(index, 1)
      //
      adjMatrix[i][j] = 0
      adjMatrix[j][i] = 0
      //
      const toDelete = revAdjMatrix[i][j]
      delete edges[toDelete]
    }
  }
}

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

function removeEdge () {
  if (selectedEdges.value.length === 0) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.'
    return
  }
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
      if (debugMode) {
        console.log('[DEBUG] edge would split graph')
      }
      console.log('WRONG; Graph would be divided:' + visited)
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante zwischen den beiden Knoten einen Teil des Graphen teilen würde.'
      return
    }

    if (edgeWeight !== maxWeightGraph) {
      if (debugMode) {
        console.log('[DEBUG] edge weight is not the maximum edge in graph')
      }
      console.log('WRONG; Edge is not the maximum edge in graph s.t. graph stays connected')
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante nicht die größte Kante im Graphen ist.'
      return
    }

    // Remove 2x edges from adjacency matrix
    adjMatrix[sourceNode][targetNode] = 0
    adjMatrix[targetNode][sourceNode] = 0

    // If weight is maximum of graph
    if (edgeWeight === maxWeightGraph) {
      // Remove from edgeWeights
      const index = edgeWeights.indexOf(edgeWeight)
      edgeWeights.splice(index, 1)
      // Remove from n-network-graph
      delete edges[edgeId]

      // Is exercise finished?
      if (edgeWeights.length === 9) {
        console.log('CORRECT; the m.s.t. has the following edges' + edgeWeights)
        infoBox.value = true
        infoBoxCorrect.value = true
        infoBoxMessage.value = 'Das ist richtig! Du hast den minimalen Spannbaum gefunden.'
      }
    }
  }

  // Calculate next ingnore list
  for (let i = 0; i < adjMatrix.length; i++) {
    for (let j = 0; j < adjMatrix.length; j++) {
      if (adjMatrix[i][j] > 0) {
        // If checking edg with weight W, check if W is in ignoreList and remove it
        if (ignoreList.includes(adjMatrix[i][j])) {
          ignoreList.splice(ignoreList.indexOf(adjMatrix[i][j]), 1)
        }
        // Check if weight W' of edge (i, j) splits up graph and add it to ignoreList
        if (doesEdgeSplitGraph(i, j) && adjMatrix[i][j] === getArrayMax(edgeWeights)) {
          ignoreList.push(adjMatrix[i][j])
        }
      }
    }
  }
}
</script>

<template>
    <v-network-graph
        class = "graph"
        :nodes="nodes"
        :edges="edges"
        :layouts="data.layouts"
        :configs="data.configs"
        v-model:selected-edges="selectedEdges"
    >
        <template #edge-label="{ edge, ...slotProps }">
            <v-edge-label
            :text="edge.label"
            text-align="center"
            vertical-align="center"
            v-bind="slotProps" />
        </template>
    </v-network-graph>

    <VerifierComp
      v-if="infoBox"
      :correctSolution="infoBoxCorrect"
      :tip="infoBoxMessage"
      @close-verifier="infoBox = false"
    />
    <button @click="removeEdge" class="next_task">
    <img src="../assets/icons/skip.png" class="icon" />
    <br />
    Kante entfernen
  </button>
</template>

<style scoped>
.graph {
  width: 100%;
  height: 700px;
}
</style>
