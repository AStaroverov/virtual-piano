import store from 'store'
import * as keyboardTypes from 'store/types/keyboard'
import { mapKeyCodeToNoteIdOctaveId } from 'constants/keycodes'
import { DIESE_SHIFT_ID } from 'constants/notes'

const SHIFT_KEYCODE = 16

document.addEventListener('keydown', keydown)
document.addEventListener('keyup', keyup)

var shiftPressed = false

function keydown (e) {
  var { key, keyCode } = e

  if (!keyCode) return

  if (keyCode === SHIFT_KEYCODE) {
    shiftPressed = true
    return
  }

  const note = { ...mapKeyCodeToNoteIdOctaveId[keyCode] }

  if (!note) return

  if (shiftPressed) {
    note.noteId = note.noteId + DIESE_SHIFT_ID
    key = key.toUpperCase()
  }

  store.commit(keyboardTypes.KEYDOWN, { ...note, key })
}

function keyup (e) {
  const keyCode = e.keyCode

  if (!keyCode) return

  if (keyCode === SHIFT_KEYCODE) {
    shiftPressed = false
  }

  const note = { ...mapKeyCodeToNoteIdOctaveId[keyCode] }

  if (!note) return

  store.commit(keyboardTypes.KEYUP, note)

  // for diese notes
  note.noteId = note.noteId + DIESE_SHIFT_ID
  store.commit(keyboardTypes.KEYUP, note)
}
