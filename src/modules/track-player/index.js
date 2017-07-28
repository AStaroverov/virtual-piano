import { remove } from 'lodash'
import * as types from 'src/store/types/keyboard'
import store from 'src/store/index'

export default class TrackPlayer {
  constructor ({ track, onPlay, onLoop, onStop, onPause }) {
    this.id = 0
    this.timer = 0
    this.track = track
    this.onPlay = onPlay
    this.onLoop = onLoop
    this.onStop = onStop
    this.onPause = onPause

    this.nowPlaying = []
    this.requrcive = false

    this.recursivePlay = this.recursivePlay.bind(this)
    this.resetId = this.resetId.bind(this)
  }

  recursivePlay () {
    const item = this.track[this.id]

    if (!item) {
      return this.requrcive
        ? this.loop(this.resetId)
        : this.stop()
    }

    const prevItem = this.track[this.id - 1]
    let delay

    if (prevItem) {
      delay = item.payload.time - prevItem.payload.time
    } else {
      delay = item.payload.time
    }

    this.timer = setTimeout(
      this.playItem,
      delay,
      item,
      this
    )
  }

  resetId () {
    this.id = 0
  }

  playItem (item, ctx) {
    store.commit(item.type, item.payload)

    ctx.modifyNowPlaying(item)

    ctx.id += 1
    ctx.recursivePlay()
  }

  modifyNowPlaying (item) {
    if (item.type === types.KEYDOWN) {
      this.nowPlaying.push(item)
    } else if (item.type === types.KEYUP) {
      remove(this.nowPlaying, _item =>
        _item.payload.octaveId === item.payload.octaveId &&
        _item.payload.noteId === item.payload.noteId
      )
    }
  }

  keyUpAll () {
    this.nowPlaying.forEach(item => store.commit(types.KEYUP, item.payload))
  }

  play () {
    this.requrcive = false
    this.onPlay && this.onPlay()
    this.recursivePlay()
  }

  loop (cb) {
    this.requrcive = true
    this.onLoop && this.onLoop()
    cb && cb()
    this.recursivePlay()
  }

  pause () {
    clearTimeout(this.timer)
    this.keyUpAll()
    this.onPause && this.onPause()
  }

  stop () {
    clearTimeout(this.timer)
    this.resetId()
    this.keyUpAll()
    this.onStop && this.onStop()
  }
}
