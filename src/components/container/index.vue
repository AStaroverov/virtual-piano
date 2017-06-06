<template>
  <div class="container">
    <vue-keyboard class="keyboard" />
    <router-view name="lower-piano" class="lower-piano" />
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-left: 100px;
}

.lower-piano {
  flex-grow: 1;
}
</style>
