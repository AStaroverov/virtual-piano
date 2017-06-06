<template>
  <div
    :class="[typeClass, pressedClass]"
    @mousedown="play"
  />
</template>

<script>
import * as buttons from 'constants/buttons'
import { KEYDOWN, KEYUP } from 'store/types/keyboard'

export default {
  name: 'button',
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
.white {
  width: calc(100% / 36);
  height: 100%;
  background-color: white;
  box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
}

.black {
  width: 0;
  height: 75%;
}

.black::before {
  content: '';
  position: absolute;
  z-index: 2;
  width: calc(100% / 45);
  height: 75%;
  background-color: black;
  transform: translateX(-50%);
  box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
}

.pressed,
.pressed::before {
  transform-origin: top center;
}

.pressed.white {
  transform: scale(.95);
}

.pressed.black::before {
  transform: translateX(-50%) scale(.95);
}

</style>
