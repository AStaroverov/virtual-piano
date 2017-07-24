<template>
  <div class="recorder">
    <button v-if="!recording" class="button" @click="startRecord">Record</button>
    <button v-if="recording" class="button" @click="stopRecord">Stop</button>
    <div class="time" v-text="withText(timeRecord)" />
    <button v-if="!recording && track.length" class="button" @click="saveTrack">Save</button>
  </div>
</template>

<script>
  import * as recordedTypes from 'src/store/types/recorder'
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

        commit(recordedTypes.CLEAR_TRACK)
        commit(recordedTypes.START_RECORD, { time: Date.now() })

        this.recording = true
        this.startIncreaseTimeRecord()
      },
      stopRecord () {
        this.recording = false
        this.timeRecord = 0
        this.intervalIncreasing && clearInterval(this.intervalIncreasing)

        const { commit } = this.$store

        commit(recordedTypes.STOP_RECORD, { time: Date.now() })
      },
      saveTrack () {
        const { commit } = this.$store
        const title = prompt('Write title for track')

        title && commit(recordsTypes.ADD_TRACK, { title, track: this.track })
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
