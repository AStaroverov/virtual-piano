import { pureNotesId, octavesId } from 'src/constants/notes'

const numberButtonsInOctave = pureNotesId.length
const numberAllButtons = numberButtonsInOctave * octavesId.length

export function getPosition (button, width) {
  return ((button.noteId - 1) + (button.octaveId - 1) * numberButtonsInOctave) * parseInt(width)
}

export function getWhiteButtonWidth (containerWidth) {
  return Math.round(containerWidth / 36)
}

export function getBlackButtonWidth (containerWidth) {
  return Math.round(containerWidth / 66)
}

export function getWidthPiano (containerWidth) {
  return getWhiteButtonWidth(containerWidth) * numberAllButtons
}
