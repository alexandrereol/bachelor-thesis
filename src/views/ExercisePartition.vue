<template>
  <div>
    <HeaderComp :title="'Minimaler Spannbaum berechnen 3'"
      :taskdescription="'Deine Aufgabe ist es, die preiswertigste Kante zwischen der roten Partition und der blauen Partition zu markieren. Wähle jeweils eine Kante aus und färbe sie blau indem du den Knopf unter dem Graph klickst.'" />
    <ExercisePartitionGraph />
    <RemoveEdgeComp />
    <VerifierComp v-if="this.submitted" :correctSolution="this.result" :tip="''"
      @close-verifier="this.submitted = false" />
  </div>
</template>

<script>
import ExercisePartitionGraph from '@/components/ExercisePartitionGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExercisePartitionGraph, VerifierComp, HeaderComp, RemoveEdgeComp }
}
</script>
