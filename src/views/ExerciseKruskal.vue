<template>
  <div>
    <HeaderComp :title="'Minimalen Spannbaum bestimmen mit Kruskal\'s Algorithmus'"
      :taskdescription="'Wähle die preiswerteste Kante aus und füge sie dem Spannbaum hinzu. Achte dabei darauf, dass keine Kreise entstehen! Dies machst du, indem du die Kante mit der Maus auswählst und dann den Knopf drückst.'" />
    <ExerciseKruskalGraph />
    <RemoveEdgeComp />
    <VerifierComp v-if="this.submitted" :correctSolution="this.result" :tip="''"
      @close-verifier="this.submitted = false" />
  </div>
</template>

<script>
import ExerciseKruskalGraph from '@/components/ExerciseKruskalGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExerciseKruskalGraph, VerifierComp, HeaderComp, RemoveEdgeComp }
}
</script>
