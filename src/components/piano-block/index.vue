<template>
  <div class="piano-block">
    <div class="wrapper track-road">
      <TrackRoad />
      <div class="bg"></div>
    </div>
    <div class="wrapper keyboard">
      <Keyboard />
    </div>
  </div>
</template>

<script>
  import Keyboard from 'src/components/keyboard/index.vue'
  import TrackRoad from 'src/components/track-road/index.vue'

  export default {
    name: 'container',
    components: { Keyboard, TrackRoad }
  }
</script>

<style scoped>
  .piano-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-style: preserve-3d;
    transform: translateY(-50px) scale(.9) perspective(1000px) rotate3d(130,0,0,30deg);
  }

  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
  }

  .track-road {
    background-color: black;
  }

  .keyboard {
    transform: translateZ(5px);
    transform-style: preserve-3d;
  }

  .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: translate(-25%, -50%);
    background: black;
  }
</style>
