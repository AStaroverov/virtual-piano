import keyboard from 'constants/keyboard'
import * as types from 'store/types/keyboard'

const state = {
  buttons: keyboard
}

const getters = {}

const mutations = {
  [types.KEYDOWN] (state, { octaveId, noteId }) {
    const button = state.buttons.find(
      button => button.octaveId === octaveId && button.noteId === noteId
    )

    button && (button.isPressed = true)
  },
  [types.KEYUP] (state, { octaveId, noteId }) {
    const button = state.buttons.find(
      button => button.octaveId === octaveId && button.noteId === noteId
    )

    button && (button.isPressed = false)
  }
}

export default {
  state,
  getters,
  mutations
}
