<template>
  <div>
    <HeaderComp
      :title="'Minimaler Spannbaum berechnen 1 (BETA)'"
      :taskdescription="'Deine Aufgabe ist es, die teuerste Kanten aus dem Graphen zu entfernen. Dies kann mit dem Knopf unter dem Graphen gemacht werden. Achte, dass der Graph verbunden bleibt und keine Kreise enthält.'"
    />
    <ExerciseDescendingGraph />
    <RemoveEdgeComp />
    <VerifierComp
      v-if="this.submitted"
      :correctSolution="this.result"
      :tip="''"
      @close-verifier="this.submitted = false"
    />

    <!--
    <TutorialComp
      :description="getTaskDescription()"
      :video_name="'Tutorial_Binaersystem1'"
      v-if="tutorialActive"
      @close-tutorial="this.tutorialActive = false"
    />
    <br/>
    <NewTaskComp :task="'ExerciseDescending'" />

    <NextTaskComp @next_task="reloadPage()" />

    <button @click="showTutorial()" class="btn_submit">
      <img src="../assets/icons/info.png" class="icon" />
      <br/>
      Hilfe
    </button>

    <button @click="submit()" class="btn_submit">
      <img src="../assets/icons/check.png" class="icon" /> <br />Überprüfen
    </button>

    <br>

     <button @click="showHint()" class="btn_submit" v-if="!hint">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Zeige Hinweis
    </button>
    <button @click="removeHint()" class="btn_submit" v-if="hint">
      <img src="../assets/icons/info.png" class="icon" />
      <br />
      Entferne Hinweis
    </button>
    <p v-if="hint">
      In der Tabelle findest du die entsprechenden Grössen und deren Wert.
    </p>
    <div style="max-width: 1000px; margin: 0 auto">
      <img
        src="../assets/hints/hint_binaer_1.png"
        style="max-width: 100%; height: auto; width: auto\9; /* ie8 */"
        v-if="hint"
      />
    </div>
    -->
  </div>
</template>

<script>
import ExerciseDescendingGraph from '@/components/ExerciseDescendingGraph.vue'
import VerifierComp from '@/components/VerifierComp.vue'
import NextTaskComp from '@/components/NextTaskComp.vue'
import NewTaskComp from '@/components/NewTaskComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import TutorialComp from '@/components/TutorialComp.vue'
import RemoveEdgeComp from '@/components/RemoveEdgeComp.vue'

export default {
  components: { ExerciseDescendingGraph, VerifierComp, HeaderComp, RemoveEdgeComp },
  data () {
    return {
      tutorialActive: false,
      hint: false
    }
  },
  methods: {
    reloadPage () {
      this.$router.go(0)
    },
    showTutorial () {
      this.tutorialActive = true
    },
    showHint () {
      this.hint = true
    },
    removeHint () {
      this.hint = false
    }
  }
}
</script>

<style>
.binaer_btn {
  width: 100px;
  height: 100px;
  /*padding: 30px;*/
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: large;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
  font-weight: bold;
  background-color: rgb(42, 159, 183);
}
.binaer_btn:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.active {
  background-color: rgb(79, 79, 175);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.binary_card {
  width: 100px;
  /*height: 100px;*/
  border: 1px solid black;
  font-size: 25px;
  border-radius: 10px;
  margin: 0 auto;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
}
.binary_container {
  display: flex;
  margin: auto;
  max-width: 840px;
}
</style>
