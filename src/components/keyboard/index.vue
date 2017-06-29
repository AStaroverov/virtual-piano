<template>
  <div class="keyboard">
    <Button v-for="(button, index) in keyboard" key="index" :button="button" />
  </div>
</template>

<script>
import Button from 'src/components/button'

export default {
  name: 'keyboard',
  computed: {
    keyboard () {
      return this.$store.state.keyboard.buttons
    }
  },
  components: { Button }
}
</script>

<style scoped>
.keyboard {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  padding: 10px;
}

</style>
