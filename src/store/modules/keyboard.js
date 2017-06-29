import keyboard from 'constants/keyboard'
import * as types from 'store/types/keyboard'

const state = {
  buttons: [ ...keyboard ],
  pressedButtons: []
}

const getters = {
  pressedButtons (state) {
    return state.buttons.filter(b => b.isPressed)
  }
}

const mutations = {
  [types.KEYDOWN] (state, { octaveId, noteId, key }) {
    const button = state.buttons.find(
      button => button.octaveId === octaveId && button.noteId === noteId
    )

    if (button) {
      button.isPressed = true
      button.timePress = Date.now()
      button.key = key
    }
  },
  [types.KEYUP] (state, { octaveId, noteId }) {
    const button = state.buttons.find(
      button => button.octaveId === octaveId && button.noteId === noteId
    )

    if (button) {
      button.isPressed = false
      button.timePress = 0
    }
  }
}

export default {
  state,
  getters,
  mutations
}