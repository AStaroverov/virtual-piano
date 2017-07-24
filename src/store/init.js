import localStore from 'src/localforage'
import * as recordsTypes from 'src/store/types/records'

export default async function init (store) {
  const tracks = await localStore.getItem('tracks')

  tracks && store.commit(recordsTypes.RESET_TRACKS, { tracks })
}
