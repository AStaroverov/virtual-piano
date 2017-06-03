<template>
  <div id="app">
    <vue-left-menu />
    <vue-container />
  </div>
</template>

<script>
import VueLeftMenu from 'components/left-menu'
import VueContainer from 'components/container'

export default {
  name: 'app',
  components: { VueLeftMenu, VueContainer }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>
