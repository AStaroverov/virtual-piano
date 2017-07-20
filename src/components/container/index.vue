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
    <PressedNotes class="row" />
    <HistoryNotes class="row" />
    <CustomText class="row" />
    <!--<router-view name="lower-piano" class="lower-piano" />-->
  </div>
</template>

<script>
import Keyboard from 'src/components/keyboard/index.vue'
import TrackRoad from 'src/components/track-road/index.vue'
import HistoryNotes from 'src/components/history-notes/index.vue'
import PressedNotes from 'src/components/pressed-notes/index.vue'
import CustomText from 'src/components/custom-text'

export default {
  name: 'container',
  components: { Keyboard, TrackRoad, HistoryNotes, PressedNotes, CustomText }
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
