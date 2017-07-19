import store from 'store'
import * as keyboardTypes from 'store/types/keyboard'
import { mapKeyCodeToNoteIdOctaveId } from 'constants/keycodes'
import { DIESE_SHIFT_ID } from 'constants/notes'

const SHIFT_KEYCODE = 16

document.addEventListener('keydown', keydown)
document.addEventListener('keyup', keyup)

var shiftPressed = false
var keyCodesPressed = new Set()

function keydown (e) {
  var { key, keyCode } = e

  if (!keyCode) return

  if (keyCode === SHIFT_KEYCODE) {
    shiftPressed = true
    return
  }

  if (keyCodesPressed.has(keyCode)) {
    return
  }

  keyCodesPressed.add(keyCode)

  const note = mapKeyCodeToNoteIdOctaveId[keyCode]

  if (!note) return

  const copyNote = { ...note }

  if (shiftPressed) {
    copyNote.noteId = copyNote.noteId + DIESE_SHIFT_ID
    key = key.toUpperCase()
  }

  store.commit(keyboardTypes.KEYDOWN, { ...copyNote, key, keyCode })
}

function keyup (e) {
  const keyCode = e.keyCode

  if (!keyCode) return

  if (keyCode === SHIFT_KEYCODE) {
    shiftPressed = false
    return
  }

  keyCodesPressed.delete(keyCode)

  const note = mapKeyCodeToNoteIdOctaveId[keyCode]

  if (!note) return

  const copyNote = { ...note }

  store.commit(keyboardTypes.KEYUP, copyNote)

  // for diese notes
  copyNote.noteId = copyNote.noteId + DIESE_SHIFT_ID
  store.commit(keyboardTypes.KEYUP, copyNote)
}
