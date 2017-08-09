<template>
  <el-card
    class="record"
    :body-style="{ padding: '15px', position: 'relative' }"
  >
    <span slot="header" class="title" v-text="record.title" />
    <div ref="timeline" class="timeline" />
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

  import { last } from 'lodash'
  import PIXI from 'src/pix'
  import Timeline from 'src/graphic/simple-timeline'
  import TrackPlayer from 'src/modules/track-player'

  export default {
    name: 'record',
    props: {
      record: {
        required: true
      }
    },
    data: () => ({
      playing: false,
      isBroken: false
    }),
    mounted () {
      this.initTimeline()
    },
    methods: {
      initTimeline () {
        const action = last(this.record.track)
        const duration = action && action.payload ? action.payload.time : null

        if (!duration) {
          this.isBroken = true
          return
        }

        const el = this.$refs.timeline
        const width = el.offsetWidth
        const height = el.offsetHeight

        this.app = new PIXI.Application(width, height, { transparent: true })
        this.app.view.style.position = 'absolute'
        this.app.view.style.top = '0'

        el.appendChild(this.app.view)

        this.timeline = new Timeline({ width, height, duration })
        this.app.stage.addChild(this.timeline)
      },
      check () {
        if (this.isBroken) {
          this.$alert('Something went wrong :(', 'Error', {
            type: 'error',
            confirmButtonText: 'Close'
          })
        }

        return !this.isBroken
      },
      play () {
        if (!this.check()) return
        if (!this.player) {
          this.player = this.initPlayer()
        }

        this.player.play()
      },
      loop: function () {
        if (!this.check()) return
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
           track: [ ...this.record.track ],
           onPlay: () => {
             this.timeline.start()
             this.playing = true
           },
           onLoop: () => {
             this.timeline.start()
             this.playing = true
           },
           onPause: () => {
             this.timeline.stop()
             this.playing = false
           },
           onStop: () => {
             this.timeline.stop()
             this.timeline.setPosition(0)
             this.playing = false
           },
           onStart: () => {
             this.playing = true
             this.timeline.setPosition(0)
             this.timeline.start()
           },
           onEnd: () => {
             this.timeline.stop()
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

  .timeline {
    position: absolute;
    top: -1px;
    width: calc(100% - 30px);
    height: 2px;
    overflow: hidden;
    border-right: 3px;
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
