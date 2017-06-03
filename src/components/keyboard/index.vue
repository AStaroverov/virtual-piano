<template>
  <div class="keyboard">
    <vue-button v-for="button in keyboard" :button="button" />
  </div>
</template>

<script>
import VueButton from 'components/button'

export default {
  name: 'keyboard',
  computed: {
    keyboard () {
      return this.$store.state.keyboard.buttons
    }
  },
  components: {
    VueButton
  }
}
</script>

<style scoped>
.keyboard {
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
}
</style>
