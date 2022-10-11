<template>
  <button @click="next_task()" class="next_task">
    <img src="../assets/icons/restart.png" class="icon" />
    <br />
    Neue Aufgabe
  </button>
</template>

<script>
export default {
  methods: {
    reloadPage () {
      location.reload()
    },
    next_task () {
      this.$emit('next_task')
    }
  }
}
</script>

<style>
.next_task {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-color: rgb(83, 81, 81);
  background-color: rgb(42, 159, 183);
  width: 150px;
  height: 70px;
  cursor: pointer;
}
.next_task:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
