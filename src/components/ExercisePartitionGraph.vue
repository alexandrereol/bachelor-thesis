<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { Nodes, Edges } from 'v-network-graph'
import data from './AlgDataGenBeta'
import VerifierComp from './VerifierComp.vue'

const nodes: Nodes = reactive({ ...data.nodes })
const edges: Edges = reactive({ ...data.edges })

const customColor: boolean[][] = reactive({ ...data.customColor })
const reactAdjMatrix: number[][] = reactive({ ...data.reactAdjMatrix })

const selectedEdges = ref<string[]>([])
const selectedNodes = ref<string[]>([])
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

// CONDITION 1: CHECK IF EDGE IS THE MINIMUM EDGE

function getArrayMin () {
  const grayWeights = []
  for (let i = 0; i < adjMatrix.length; i++) {
    for (let j = 0; j < adjMatrix.length; j++) {
      if (customColor[i][i] !== customColor[j][j]) {
        grayWeights.push(adjMatrix[i][j])
      }
    }
  }

  console.log(grayWeights.filter(val => val !== 0))
  return Math.min.apply(null, grayWeights.filter(val => val !== 0))
}

// CONDITION 2: CHECK IF EDGE FORMS CIRCLE

function colorEdge () {
  // deselect edge and select nodes such that they'll update
  selectedNodes.value = ['node0', 'node1', 'node2', 'node3', 'node4', 'node5', 'node6', 'node7', 'node8', 'node9']
  if (selectedEdges.value.length === 0) {
    infoBox.value = true
    infoBoxCorrect.value = false
    infoBoxMessage.value = 'Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.'
    return
  }
  for (const edgeId of selectedEdges.value) {
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
    const minWeightGraph = getArrayMin()
    if (debugMode) {
      console.log('')
      console.log('[DEBUG] minimum edge in grey edges: ' + minWeightGraph)
      console.log('[DEBUG] selected edge in graph: ' + edgeWeight)
      console.log('[DEBUG] condition 1 satisfied: ' + (edgeWeight === minWeightGraph))
    }
    if (edgeWeight !== minWeightGraph) {
      infoBox.value = true
      infoBoxCorrect.value = false
      infoBoxMessage.value = 'Dies scheint nicht richtig zu sein, da die Kante nicht die preiswertigste graue Kante ist.'
      return
    }
    // CONDITION 2: CHECK IF EDGE FORMS CIRCLE IN BLUE

    // Color the edge selected
    customColor[sourceNode][sourceNode] = true
    customColor[targetNode][targetNode] = true
    customColor[sourceNode][targetNode] = true
    customColor[targetNode][sourceNode] = true

    reactAdjMatrix[sourceNode][targetNode] = 1
    reactAdjMatrix[targetNode][sourceNode] = 1
    // CHECK IF FINISHED
  }
  for (const edgeId in edges) {
    const currentEdge = edges[edgeId]
    const source: number = +(currentEdge.source.replace('node', ''))
    const target: number = +(currentEdge.target.replace('node', ''))
    if (customColor[source][source] && customColor[target][target] && reactAdjMatrix[source][target] !== 1) {
      delete edges[edgeId]
    }
  }

  selectedEdges.value = ['edge1', 'edge2', 'edge3', 'edge4', 'edge5', 'edge6', 'edge7', 'edge8', 'edge9', 'edge10', 'edge11', 'edge12', 'edge13', 'edge14', 'edge15', 'edge16', 'edge17']

  const resultFlag = customColor[0][0] && customColor[1][1] && customColor[2][2] && customColor[3][3] && customColor[4][4] && customColor[5][5] && customColor[6][6] && customColor[7][7] && customColor[8][8] && customColor[9][9]
  if (resultFlag) {
    console.log('CORRECT; the m.s.t. has the following edges' + edgeWeights)
    infoBox.value = true
    infoBoxCorrect.value = true
    infoBoxMessage.value = 'Alles korrekt! Du hast alle Kanten des minimalen Spannbaumes gefunden!'
  }

  setTimeout(() => {
    selectedEdges.value = []
  }, 0.00001)
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
        v-model:selected-nodes="selectedNodes"
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
