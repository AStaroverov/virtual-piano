<template>
  <div ref="keyboard" />
</template>

<script>
  import { forEach } from 'lodash'
  import PianoGL from 'src/graphic/piano'
  import events from 'src/modules/event-bus'

  export default {
    name: 'keyboard',
    computed: {
      buttons () {
        return this.$store.state.keyboard.buttons
      }
    },
    watch: {
      buttons: {
        handler (buttons) {
          this.piano.updateButtons(buttons)
        },
        deep: true
      }
    },
    mounted () {
      this.piano = new PianoGL({
        container: this.$refs.keyboard,
        buttons: this.buttons
      })
    }
  }
</script>

<style scoped>

</style>
