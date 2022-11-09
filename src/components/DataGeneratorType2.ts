import { Layouts } from 'v-network-graph'
import * as vNG from 'v-network-graph'
import { reactive } from 'vue'

let edgesWeight = Array.from({ length: 17 }, () => Math.floor(Math.random() * 21) + 1)

const debug = false
if (debug) {
  edgesWeight = [20, 19, 5, 14, 5, 5, 16, 6, 14, 13, 10, 20, 19, 1, 1, 1, 1]
}

interface Edge extends vNG.Edge {
  color: string
}

interface Node extends vNG.Node {
  color: string
}

const customColor = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => false))
customColor[0][0] = true

const reactAdjMatrix: number[][] = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0))

function genColor (i: number, j: number): string {
  if (i === j) {
    // node
    if (customColor[i][i]) {
      return 'blue'
    }
    return 'red' // blue node
  }
  // edge
  if (reactAdjMatrix[i][j]) return 'blue'
  if (!customColor[i][i] && !customColor[j][j]) return 'red'
  return 'gray'
}

const nodes: Record<string, Node> = {
  node0: { name: 'Node 0', color: genColor(0, 0) },
  node1: { name: 'Node 1', color: genColor(1, 1) },
  node2: { name: 'Node 2', color: genColor(2, 2) },
  node3: { name: 'Node 3', color: genColor(3, 3) },
  node4: { name: 'Node 4', color: genColor(4, 4) },
  node5: { name: 'Node 5', color: genColor(5, 5) },
  node6: { name: 'Node 6', color: genColor(6, 6) },
  node7: { name: 'Node 7', color: genColor(7, 7) },
  node8: { name: 'Node 8', color: genColor(8, 8) },
  node9: { name: 'Node 9', color: genColor(9, 9) }
}

const edges: Record<string, Edge> = {
  edge1: { source: 'node0', target: 'node1', label: edgesWeight[0].toString(), color: genColor(0, 1) },
  edge2: { source: 'node1', target: 'node2', label: edgesWeight[1].toString(), color: genColor(1, 2) },
  edge3: { source: 'node3', target: 'node4', label: edgesWeight[2].toString(), color: genColor(3, 4) },
  edge4: { source: 'node5', target: 'node6', label: edgesWeight[3].toString(), color: genColor(5, 6) },
  edge5: { source: 'node6', target: 'node7', label: edgesWeight[4].toString(), color: genColor(6, 7) },
  edge6: { source: 'node0', target: 'node3', label: edgesWeight[5].toString(), color: genColor(0, 3) },
  edge7: { source: 'node1', target: 'node3', label: edgesWeight[6].toString(), color: genColor(1, 3) },
  edge8: { source: 'node1', target: 'node4', label: edgesWeight[7].toString(), color: genColor(1, 4) },
  edge9: { source: 'node2', target: 'node4', label: edgesWeight[8].toString(), color: genColor(2, 4) },
  edge10: { source: 'node3', target: 'node5', label: edgesWeight[9].toString(), color: genColor(3, 5) },
  edge11: { source: 'node3', target: 'node6', label: edgesWeight[10].toString(), color: genColor(3, 6) },
  edge12: { source: 'node4', target: 'node6', label: edgesWeight[11].toString(), color: genColor(4, 6) },
  edge13: { source: 'node4', target: 'node7', label: edgesWeight[12].toString(), color: genColor(4, 7) },
  edge14: { source: 'node5', target: 'node8', label: edgesWeight[13].toString(), color: genColor(5, 8) },
  edge15: { source: 'node0', target: 'node8', label: edgesWeight[14].toString(), color: genColor(0, 8) },
  edge16: { source: 'node7', target: 'node9', label: edgesWeight[15].toString(), color: genColor(7, 9) },
  edge17: { source: 'node2', target: 'node9', label: edgesWeight[16].toString(), color: genColor(2, 9) }
}

const xScale = 1
const yScale = 2

const layouts: Layouts = {
  nodes: {
    node0: { x: xScale * -400, y: yScale * 200 },
    node1: { x: xScale * 0, y: yScale * 200 },
    node2: { x: xScale * 400, y: yScale * 200 },
    node3: { x: xScale * -200, y: yScale * 100 },
    node4: { x: xScale * 200, y: yScale * 100 },
    node5: { x: xScale * -400, y: yScale * 0 },
    node6: { x: xScale * 0, y: yScale * 0 },
    node7: { x: xScale * 400, y: yScale * 0 },
    node8: { x: xScale * -600, y: yScale * 100 },
    node9: { x: xScale * 600, y: yScale * 100 }
  }
}

const configs = reactive(
  vNG.defineConfigs<Node, Edge>({
    view: {
      panEnabled: false,
      zoomEnabled: false
    },
    node: {
      draggable: true,
      selectable: true,
      label: {
        visible: false
      },
      normal: {
        color: node => genColor(+(node.name!.replace('Node ', '')), +(node.name!.replace('Node ', '')))
      },
      focusring: {
        visible: false
      }
    },
    edge: {
      selectable: 1,
      label: {
        fontSize: 20
      },
      normal: {
        color: edge => genColor(+(edge.source.replace('node', '')), +(edge.target.replace('node', ''))),
        width: 6
      }
    }
  }
  ))

export default {
  nodes,
  edges,
  edgesWeight,
  customColor,
  reactAdjMatrix,
  layouts,
  configs
}
