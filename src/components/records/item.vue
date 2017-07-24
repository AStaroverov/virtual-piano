<template>
  <div class="record">
    <span class="title" v-text="record.title" />
    <div class="buttons">
      <button
        v-if="!playing"
        class="button"
        @click="play"
      >
        play
      </button>
      <button
        v-if="!playing"
        class="button"
        @click="loop"
      >
        loop
      </button>
      <button
        v-if="playing"
        class="button"
        @click="pause"
      >
        pause
      </button>
      <button
        v-if="playing"
        class="button"
        @click="stop"
      >
        stop
      </button>
    </div>
  </div>
</template>

<script>
  import TrackPlayer from 'src/modules/track-player'

  export default {
    name: 'record',
    props: {
      record: {
        required: true
      }
    },
    data: () => ({
      playing: false
    }),
    methods: {
      play () {
        if (!this.player) {
          this.player = this.initPlayer()
        }

        this.player.play()
      },
      loop () {
        if (!this.player) {
          this.player = this.initPlayer()
        }

        this.player.loop()
      },
      pause () {
        this.player.pause()
      },
      stop () {
        this.player.stop()
      },
      initPlayer () {
         return new TrackPlayer({
           track: this.record.track,
           onPlay: () => {
             this.playing = true
           },
           onLoop: () => {
             this.playing = true
           },
           onPause: () => {
             this.playing = false
           },
           onStop: () => {
             this.playing = false
           }
         })
       }
    }
  }
</script>

<style scoped>
  .record {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(0,0,0, .5);
  }

  .title {
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
  }

  .button {
    padding: 5px;
    width: 50px;
  }
  .button + .button {
    margin-left: 10px;
  }
</style>
