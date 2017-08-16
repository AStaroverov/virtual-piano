<template>
  <div
    ref="graph"
    class='roads'
    :style="style"
  />
</template>

<script>
  import * as buttons from 'src/constants/buttons'
  import { mapColorHexToNoteId } from 'src/constants/note-color'

  import { forEach } from 'lodash'
  import PIXI from 'src/pix'
  import KeyLine from 'src/graphic/key-line'
  import * as utils from 'src/utils/piano-key'

  export default {
    name: 'track-road',
    props: {
      onKeyup: {
        required: true,
        type: Function
      },
      onKeydown: {
        required: true,
        type: Function
      }
    },
    data: () => ({
      width: 0
    }),
    computed: {
      style () {
        return this.width
          ? { width: `${this.width}px`}
          : null
      }
    },
    created () {
      this.lines = {}
      this.height = 0
      this.whiteButtonWidth = 0
      this.blackButtonWidth = 0
    },
    mounted () {
      const el = this.$refs.graph
      const width = el.offsetWidth

      this.width = utils.getWidthPiano(width)
      this.height = el.offsetHeight
      this.whiteButtonWidth = utils.getWhiteButtonWidth(width)
      this.blackButtonWidth = utils.getBlackButtonWidth(width)
      this.app = new PIXI.Application(this.width, this.height, { antialias: true })

      el.appendChild(this.app.view)

      this.onKeyup(this.removePressedButton)
      this.onKeydown(this.addPressedButton)
    },
    methods: {
      addPressedButton (button) {
        const x = utils.getPosition(button, this.whiteButtonWidth)
        const width = button.typeId === buttons.WHITE_ID ? this.whiteButtonWidth : this.blackButtonWidth
        const line = this.lines[button.id] = new KeyLine({
          x,
          y: 0,
          width,
          yDestroy: this.height,
          color:  mapColorHexToNoteId[button.noteId]
        })

        this.app.stage.addChild(line)
        line.startGrow()
      },
      removePressedButton (button) {
        const line = this.lines[button.id]

        if (!line) return

        line.stopGrow()
      }
    }
  }
</script>

<style scoped>
  .roads {
    width: 100%;
    height: 300px;
    transform: scale3d(1, -1, 1);
  }
</style>
