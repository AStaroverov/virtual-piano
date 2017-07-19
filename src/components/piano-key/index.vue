<template>
  <div
    :class="[typeClass, pressedClass]"
    @mousedown="play"
    v-text="button.text"
  />
</template>

<script>
import * as buttons from 'src/constants/buttons'
import { KEYDOWN, KEYUP } from 'src/store/types/keyboard'

export default {
  name: 'piano-key',
  props: {
    button: {
      required: true
    }
  },
  computed: {
    typeClass () {
      return this.button.typeId === buttons.WHITE_ID
        ? 'white'
        : 'black'
    },
    pressedClass () {
      return this.button.isPressed
        ? 'pressed'
        : ''
    }
  },
  methods: {
    play () {
      document.body.addEventListener('mouseup', this.stop)

      clearTimeout(this._keyupTimer)
      this.$store.commit(KEYDOWN, { ...this.button })
    },
    stop () {
      document.body.removeEventListener('mouseup', this.stop)

      this._keyupTimer = setTimeout(() => {
        this.$store.commit(KEYUP, { ...this.button })
      }, 100)
    }
  }
}
</script>

<style scoped>
.white,
.black {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  padding-bottom: 6px;
  user-select: none;
}

.white {
  z-index: 1;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
  color: #ababab;
}

.black {
  z-index: 2;
  height: 75%;
  background-color: black;
  box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
  color: #616161;
}

.pressed {
  transform-origin: top center;
}

.pressed.white {
  transform: scale(.95);
}

.pressed.black {
  transform: scale(.95);
}

</style>
