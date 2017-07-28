import { findIndex } from 'lodash'
import uuid from 'uuid/v4'
import * as types from 'src/store/types/records'

const state = {
  list: [
    // {
    //   id: number,
    //   title: string,
    //   track: Array
    // }
  ]
}

const getters = {}

const mutations = {
  [types.RESET_RECORDS] (state, { tracks }) {
    state.list = tracks || []
  },
  [types.ADD_RECORD] (state, record) {
    console.log(record)
    state.list.push(record)
  },
  [types.REMOVE_RECORD] (state, id) {
    const i = findIndex(state.list, record => record.id === id)

    state.list.splice(i, 1)
  }
}

const actions = {
  [types.ADD_RECORD] ({ commit }, record) {
    const startTime = record.track[0].time
    const id = uuid(startTime)

    record.track.forEach(action => {
      action.time -= startTime
    })

    commit(types.ADD_RECORD, { ...record, id })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
