<template>
  <el-card class="record">
    <span slot="header" class="title" v-text="record.title" />
    <div class="buttons">
      <el-button
        v-if="!playing"
        type="success"
        class="button"
        @click="play"
      >
        <div class="inner">
          <i class="icon mdi md-18">play_arrow</i>
          <span>play</span>
        </div>
      </el-button>
      <el-button
        v-if="!playing"
        type="success"
        class="button"
        @click="loop"
      >
        <div class="inner">
          <i class="icon mdi md-18">loop</i>
          <span>loop</span>
        </div>
      </el-button>
      <el-button
        v-if="playing"
        type="warning"
        class="button"
        @click="pause"
      >
        <div class="inner">
          <i class="icon mdi md-18">pause</i>
          <span>pause</span>
        </div>
      </el-button>
      <el-button
        v-if="playing"
        type="warning"
        class="button"
        @click="stop"
      >
        <div class="inner">
          <i class="icon mdi md-18">stop</i>
          <span>stop</span>
        </div>
      </el-button>
    </div>
    <div class="footer">
      <el-button type="danger" size="small" class="button" @click="remove">
        <div class="inner">
          <i class="icon mdi md-18">delete</i>
          <span>delete</span>
        </div>
      </el-button>
    </div>
  </el-card>
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
        this.$store.commit(typesRecords.REMOVE_RECORD, this.record.uid)
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
  }

  .title {
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
  }

  .button {
    width: 100px;
  }

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    margin-right: 5px;
  }

  .button + .button {
    margin-left: 10px;
  }

  .footer {
    margin-top: 10px;
  }
</style>
