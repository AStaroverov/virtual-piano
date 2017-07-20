<template>
  <div
    ref="container"
    class="keyboard"
    :style="style"
  >
    <Key
      v-for="(button, index) in keyboard"
      key="index"
      :button="button"
      :style="getButtonStyle(button)"
    />
  </div>
</template>

<script>
import { WHITE_ID } from 'src/constants/buttons'
import Key from 'src/components/piano-key/index'
import * as utils from 'src/utils/piano-key'

export default {
  name: 'keyboard',
  data: () => ({
    width: 0,
    whiteButtonWidth: 0,
    blackButtonWidth: 0
  }),
  computed: {
    keyboard () {
      return this.$store.state.keyboard.buttons
    },
    style () {
      return this.width
        ? { width: `${this.width}px`}
        : null
    }
  },
  mounted () {
    const el = this.$refs.container
    const width = el.offsetWidth

    this.whiteButtonWidth = utils.getWhiteButtonWidth(width)
    this.blackButtonWidth = utils.getBlackButtonWidth(width)
    this.width = utils.getWidthPiano(width)
  },
  methods: {
    getButtonStyle (button) {
      const width =  button.typeId === WHITE_ID
        ? this.whiteButtonWidth
        : this.blackButtonWidth
      const position = utils.getPosition(button, this.whiteButtonWidth)

      return {
        width: `${width}px`,
        left: `${position}px`
      }
    }
  },
  components: { Key }
}
</script>

<style scoped>
  .keyboard {
    position: relative;
    display: flex;
    width: 100%;
    height: 150px;
  }
</style>
