<template>
  <div>
    <HeaderComp :title="'Minimaler Spannbaum berechnen 2'"
      :taskdescription="'Deine Aufgabe ist es, die preiswertigste Kante auszuwählen und sie dem minimalen Spannbaum hinzuzufügen. Dies kann mit dem Knopf unter dem Graphen gemacht werden. Achte, dass keine Kreise entstehen!'" />
    <ExerciseAscendingGraph />
    <RemoveEdgeComp />
    <VerifierComp v-if="this.submitted" :correctSolution="this.result" :tip="''"
      @close-verifier="this.submitted = false" />
  </div>
</template>

<script>
import ExerciseAscendingGraph from '@/components/ExerciseAscendingGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExerciseAscendingGraph, VerifierComp, HeaderComp, RemoveEdgeComp }
}
</script>
