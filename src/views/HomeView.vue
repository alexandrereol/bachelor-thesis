<template>
  <div>
    <div class="header">
      <h1>Willkommen in der Lernumgebung zu minimalen Spannbäumen in der Graphentheorie!</h1>
      <p class="aufgabenstellung">Auf dieser Platform wirst du drei verschiedene "greedy" (gierige) Algorithmen lernen können, die einen minimalen Spannbaum berechnen. Du wirst die drei Algorithmen in mehreren Aufgaben üben können.</p>
      <hr style= "max-width: 1100px; background-color: black; height: 1px; border: none;">
      <HomeGraph class="homegraph"/>
      <hr style= "max-width: 1100px; background-color: black; height: 1px; border: none;">
    </div>
    <h2>Wähle eine der drei Aufgaben um zu starten:</h2>
    <div class="taskrow">
      <router-link to="ex/descending">
        <button class="taskbtn">
          <h1>Abwärts entfernen</h1>
        </button>
      </router-link>

      <router-link to="ex/ascending">
        <button class="taskbtn">
          <h1>Aufwärts auswählen</h1> <br>
        </button>
      </router-link>

      <router-link to="about">
        <button class="taskbtn">
          <h1>Farbige Partitionen</h1> <br>
        </button>
      </router-link>

    </div>
    <router-link to="about">
      <button class="info">
        Information
      </button>
    </router-link>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'
import HomeGraph from '@/components/HomeGraphComp.vue'

export default {
  name: 'HomeView',
  components: { FooterComp, HomeGraph }
}
</script>

<style>
body {
  background-color: rgb(174, 201, 253);
}

.aufgabenstellung {
  margin-left: 25px;
  margin-right: 25px;
}
h1, h2, p, span {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h1, span {
  font-weight: bold;
}
span {
  text-decoration: none;
}
.tasks {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
}
.info {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
  background-color: rgb(42, 159, 183);
  cursor: pointer;
}
.info:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.taskbtn {
  text-align: center;
  text-decoration: none;
  background-color: rgb(42, 159, 183);
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  border-color: rgb(83, 81, 81);
  border: none;
  width: 250px;
  height: 250px;
  cursor: pointer;
}
.taskbtn:hover {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 90%);
}
.taskrow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
