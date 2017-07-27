<template>
  <div class="recorder">
    <button v-if="!recording" class="button" @click="startRecord">Record</button>
    <button v-if="recording" class="button" @click="stopRecord">Stop</button>
    <div class="time" v-text="withText(timeRecord)" />
    <button v-if="!recording && track.length" class="button" @click="saveTrack">Save</button>
  </div>
</template>

<script>
  import * as recorderTypes from 'src/store/types/recorder'
  import * as recordsTypes from 'src/store/types/records'

  export default {
    name: 'recorder',
    data: () => ({
      recording: false,
      timeRecord: 0
    }),
    computed: {
      track () {
        return this.$store.state.recorder.track
      }
    },
    methods: {
      startRecord () {
        const { commit } = this.$store

        commit(recorderTypes.CLEAR_TRACK)
        commit(recorderTypes.START_RECORD)

        this.recording = true
        this.startIncreaseTimeRecord()
      },
      stopRecord () {
        this.recording = false
        this.timeRecord = 0
        this.intervalIncreasing && clearInterval(this.intervalIncreasing)

        const { commit } = this.$store

        commit(recorderTypes.STOP_RECORD)
      },
      saveTrack () {
        const { dispatch } = this.$store
        const title = prompt('Write title for track')

        title && dispatch(recordsTypes.ADD_RECORD, { title, track: this.track })
      },
      startIncreaseTimeRecord () {
        this.intervalIncreasing = setInterval(() => {
          this.timeRecord += 1
        }, 1000)
      },
      withText (time) {
        return `${time} sec`
      }
    }
  }
</script>

<style scoped>
  .recorder {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .time {
    margin: 10px;
  }
</style>
