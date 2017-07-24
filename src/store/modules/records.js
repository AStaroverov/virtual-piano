import * as types from 'src/store/types/records'

const state = {
  list: []
}

const getters = {}

const mutations = {
  [types.RESET_TRACKS] (state, { tracks }) {
    state.list = tracks || []
  },
  [types.ADD_TRACK] (state, { title, track }) {
    state.list.push({
      title,
      track
    })
  }
}

export default {
  state,
  getters,
  mutations
}
