<template>
    <router-link :to="{name: task}">
      <button class="btn_submit">
        <img src="../assets/icons/skip.png" class="icon">
        <br>
        Nächste Aufgabe</button>
    </router-link>
</template>

<script>
export default {
  name: 'NewTaskComp',
  props: ['task']
}
</script>

<style>
.icon {
  height: 30px;
  width: auto;
}
</style>
