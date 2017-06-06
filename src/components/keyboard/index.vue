<template>
  <div class="keyboard">
    <div class="buttons">
      <vue-button v-for="(button, index) in keyboard" key="index" :button="button" />
    </div>
    <div class="highlights">
      <pre v-for="(button, index) in pressedButtons" v-text="mapNoteIdToName[button.noteId]" />
    </div>
  </div>
</template>

<script>
import VueButton from 'components/button'
import * as notes from 'src/constants/notes'

export default {
  name: 'keyboard',
  data: () => ({
    mapNoteIdToName: notes.map
  }),
  computed: {
    keyboard () {
      return this.$store.state.keyboard.buttons
    },
    pressedButtons () {
      return this.$store.state.keyboard.buttons.filter(button => button.isPressed)
    }
  },
  components: {
    VueButton
  }
}
</script>

<style scoped>
.keyboard {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}

.buttons {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 150px;
}

.highlights {
  display: flex;
  flex-direction: row;
}
</style>
