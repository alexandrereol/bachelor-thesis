<template>
  <div>
    <HeaderComp :title="'Minimaler Spannbaum berechnen 1 (BETA)'"
      :taskdescription="'Deine Aufgabe ist es, die teuerste Kante welche sich in einem Kreis befindet, aus dem Graphen zu entfernen. Dies kann mit dem Knopf unter dem Graphen gemacht werden.'" />
    <ExerciseDescendingGraph />
    <RemoveEdgeComp />
    <VerifierComp v-if="this.submitted" :correctSolution="this.result" :tip="''"
      @close-verifier="this.submitted = false" />
  </div>
</template>

<script>
import ExerciseDescendingGraph from '@/components/ExerciseDescendingGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExerciseDescendingGraph, VerifierComp, HeaderComp, RemoveEdgeComp }
}
</script>
