<template>
  <div class="container">
    <vue-keyboard />
    <router-view />
  </div>
</template>

<script>
import VueKeyboard from 'components/keyboard'

export default {
  name: 'container',
  data: () => ({ }),
  components: { VueKeyboard }
}
</script>

<style scoped>
.container {
  width: calc(100vw - 200px);
  height: 100vh;
  padding-left: 200px;
}
</style>
