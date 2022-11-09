<template>
  <div>
    <div class="header">
      <h1>{{ title }}</h1>
      <router-link to="/">
        <button class="back_to_homepage">
          <img src="../assets/icons/home.png" style="height: 40px; width: 50px" />
          <br />
          Startseite
        </button>
      </router-link>
      <p class="aufgabenstellung">{{ taskdescription }} <span style="font-size: 25px; font-weight: bold"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'taskdescription']
}
</script>

<style>
.header {
  padding-top: 100px;
  padding-bottom: 50px;
}
.aufgabenstellung {
  background-color:azure;
  border-radius: 10px;
  padding: 20px;
  max-width: 1000px;
  margin: 50px auto;
  font-size: large;
}
.back_to_homepage {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83,81,81);
}
.back_to_homepage:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
