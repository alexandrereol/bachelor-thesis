<template>
  <div>
    <HeaderComp :title="'Minimalen Spannbaum bestimmen mit Prim\'s Algorithmus'"
      :taskdescription="'Wähle die preiswerteste Kante zwischen der roten und der blauen Partition. Markiere die Kante und färbe sie blau indem du den Knopf drückst.'" />
    <ExercisePrimGraph />
    <RemoveEdgeComp />
    <VerifierComp v-if="this.submitted" :correctSolution="this.result" :tip="''"
      @close-verifier="this.submitted = false" />
  </div>
</template>

<script>
import ExercisePrimGraph from '@/components/ExercisePrimGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExercisePrimGraph, VerifierComp, HeaderComp, RemoveEdgeComp }
}
</script>
