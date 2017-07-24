import * as types from 'src/store/types/recorder'

const state = {
  record: false,
  timeStart: 0,
  timeEnd: 0,
  track: []
}

const getters = {}

const mutations = {
  [types.START_RECORD] (state, { time }) {
    state.record = true
    state.timeStart = time
  },
  [types.STOP_RECORD] (state, { time }) {
    state.record = false
    state.timeEnd = time - state.timeStart
    state.timeStart = 0
  },
  [types.CLEAR_TRACK] (state) {
    state.track = []
  },
  [types.PUSH_TO_TRACK] (state, button) {
    state.track.push(button)
  }
}

export default {
  state,
  getters,
  mutations
}
