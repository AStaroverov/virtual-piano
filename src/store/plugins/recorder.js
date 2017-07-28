import localStore from 'src/localforage'
import * as keyboard from '../types/keyboard'
import * as record from '../types/recorder'
import * as records from '../types/records'

export default function (store) {
  store.subscribe((mutation) => {
    const { recorder } = store.state

    if (recorder.record && (mutation.type === keyboard.KEYDOWN || mutation.type === keyboard.KEYUP)) {
      pushToTrack(store, mutation)
    }

    if (mutation.type === records.ADD_RECORD || mutation.type === records.REMOVE_RECORD) {
      saveToLocal(store.state.records.list)
    }
  })
}

function pushToTrack (store, mutation) {
  store.commit(record.PUSH_TO_TRACK, {
    type: mutation.type,
    payload: {
      ...mutation.payload,
      time: Date.now()
    }
  })
}

function saveToLocal (tracks) {
  localStore.setItem('tracks', tracks)
}
