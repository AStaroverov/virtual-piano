import * as types from 'src/store/types/records'

const state = {
  list: []
}

const getters = {}

const mutations = {
  [types.RESET_RECORDS] (state, { tracks }) {
    state.list = tracks || []
  },
  [types.ADD_RECORD] (state, { title, track }) {
    state.list.push({
      title,
      track
    })
  }
}

const actions = {
  [types.ADD_RECORD] ({ commit }, record) {
    const startTime = record.track[0].time

    record.track.forEach(action => {
      action.time -= startTime
    })

    commit(types.ADD_RECORD, record)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
