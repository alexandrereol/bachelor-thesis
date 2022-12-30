<template>
  <div>
    <div class="header">
      <h1>Lernumgebung zu minimalen Spannbäumen in der Graphentheorie</h1>
      <p class="aufgabenstellung">In dieser Lernumgebung lernst du spielerisch drei Algorithmen kennen, mit denen der minimale Spannbaum bestimmt werden kann.</p>
      <HomeGraph class="homegraph" />
    </div>
    <h2>Wähle einen der Algorithmen:</h2>
    <div class="taskrow">
      <router-link to="ex/greedy">
        <button class="taskbtn">
          <h1>Greedy</h1>
        </button>
      </router-link>

      <router-link to="ex/kruskal">
        <button class="taskbtn">
          <h1>Kruskal</h1> <br>
        </button>
      </router-link>

      <router-link to="ex/prim">
        <button class="taskbtn">
          <h1>Prim</h1> <br>
        </button>
      </router-link>

    </div>
    <router-link to="about">
      <button class="info">
        Information
      </button>
    </router-link>
  </div>
</template>

<script>
import HomeGraph from '@/components/HomeGraphComp.vue'

export default {
  name: 'HomeView',
  components: { HomeGraph }
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
