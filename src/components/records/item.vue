<template>
  <div class="record">
    <div class="close" @click="remove">+</div>
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
  import * as typesRecords from 'src/store/types/records'
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
        if (this.player) {
          this.player.stop()
        }
      },
      remove () {
        this.stop()
        this.$store.commit(typesRecords.REMOVE_RECORD, this.record.id)
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
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(0,0,0, .5);
  }

  .close {
    cursor: pointer;
    box-sizing: content-box;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: rotate(45deg);
    background-color: transparent;
    line-height: 0;
    color: black;
    transition: background-color .15s;
  }

  .close:hover {
    background-color: rgba(0,0,0, .1);
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
