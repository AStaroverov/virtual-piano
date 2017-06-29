<template>
  <div class="container">
    <Keyboard />
    <PressedNotes />
    <HistoryNotes />
    <router-view name="lower-piano" class="lower-piano" />
  </div>
</template>

<script>
import Keyboard from 'src/components/keyboard'
import HistoryNotes from 'src/components/history-notes'
import PressedNotes from 'src/components/pressed-notes'

export default {
  name: 'container',
  components: { Keyboard, HistoryNotes, PressedNotes }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-left: 100px;
}

.lower-piano {
  flex-grow: 1;
}
</style>
