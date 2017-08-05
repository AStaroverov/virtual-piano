<template>
  <div
    :class="[typeClass, pressedClass]"
    @mousedown="play"
  >
    <div class="text" v-text="button.text" />
    <div class="edge front" />
    <div v-if="isBlack" class="edge left" />
    <div v-if="isBlack" class="edge right" />
  </div>
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
    isBlack () {
      return this.button.typeId === buttons.BLACK_ID
    },
    typeClass () {
      return this.isBlack
        ? 'black'
        : 'white'
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
    transform-style: preserve-3d;
  }

  .white {
    z-index: 10;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
    color: #ababab;
  }

  .black {
    z-index: 20;
    height: 75%;
    transform: translateZ(5px);
    background-color: black;
    box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
    color: #616161;
  }

  .pressed {
    transform-origin: top;
  }

  .pressed.white {
    z-index: 9;
    transform: translateZ(-10px);
  }

  .pressed.black {
    z-index: 19;
    height: calc(75% + 5px);
    transform: translateZ(2px);
  }

  .edge.front {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    transform-origin: bottom;
    box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
  }

  .white .edge.front {
    z-index: 9;
    height: 20px;
    background-color: white;
    transform: rotateX(140deg);
  }

  .black .edge.front {
    z-index: 19;
    height: 20px;
    background-color: black;
    transform: rotateX(155deg);
  }

  .edge.right {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
  }

  .black .edge.right {
    z-index: 18;
    width: 10px;
    background-color: black;
    transform-origin: right;
    transform: translateY(1px) rotateY(-90deg) skewY(-60deg);
  }

  .edge.left {
    position: absolute;
    top: 0;
    left: -1px;
    height: 100%;
    box-shadow: 0 0 1px 1px rgba(0,0,0, .5);
  }

  .black .edge.left {
    z-index: 18;
    width: 10px;
    background-color: black;
    transform-origin: left;
    transform: translateY(1px) rotateY(90deg) skewY(60deg);
  }
</style>
