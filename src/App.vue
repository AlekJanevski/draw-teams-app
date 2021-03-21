<template>
  <div id="app">
    <TeamsGenerator/>
  </div>
</template>

<script>
import TeamsGenerator from './components/TeamsGenerator.vue'

export default {
  name: 'App',
  components: {
    TeamsGenerator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
