import localforage from 'localforage'

export default localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: 'piano-hero',
  version: '1.0.0'
})
