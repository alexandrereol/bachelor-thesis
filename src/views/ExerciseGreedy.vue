<template>
  <div>
    <HeaderComp :title="'Minimalen Spannbaum berechnen mit dem Algorithmus «Greedy»'"
      :taskdescription="'Entferne die teuerste Kante, die sich in einem Kreis befindet. Dies machst du, indem du die Kante mit der Maus auswählst und dann den Knopf drückst.'" />
    <ExerciseGreedyGraph />
    <RemoveEdgeComp />
    <VerifierComp v-if="this.submitted" :correctSolution="this.result" :tip="''"
      @close-verifier="this.submitted = false" />
  </div>
</template>

<script>
import ExerciseGreedyGraph from '@/components/ExerciseGreedyGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExerciseGreedyGraph, VerifierComp, HeaderComp, RemoveEdgeComp }
}
</script>
