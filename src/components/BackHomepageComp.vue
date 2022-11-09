<template>
  <router-link to="/">
    <button class="back_to_homepage">
      <img src="../assets/icons/home.png" style="height: 40px; width: 40px;">
      <br>
      Startseite
    </button>
  </router-link>
</template>

<style>
.back_to_homepage {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83,81,81);
  border: 1px solid black;
  background-color: rgb(42, 159, 183);
  cursor: pointer;
}
.back_to_homepage:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
