<template>
  <div class="container">
    <div class="center">
      <div class="wrapper black">
        <TrackRoad />
      </div>
      <div class="wrapper">
        <Keyboard />
      </div>
    </div>
    <Recorder />
    <Records />
  </div>
</template>

<script>
import Keyboard from 'src/components/keyboard/index.vue'
import TrackRoad from 'src/components/track-road/index.vue'
import Recorder from 'src/components/recorder/index.vue'
import Records from 'src/components/records/index.vue'

export default {
  name: 'container',
  components: { Keyboard, TrackRoad, Recorder, Records }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 10px;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
}

.black {
  background-color: black;
}

.row {
  margin: 10px;
}

.lower-piano {
  flex-grow: 1;
}
</style>
