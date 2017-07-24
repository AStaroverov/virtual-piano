import Vue from 'vue'
import Vuex from 'vuex'
import keyboard from './modules/keyboard'
import recorder from './modules/recorder'
import records from './modules/records'
import recordPlugin from './plugins/recorder'
import init from './init'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    keyboard,
    recorder,
    records
  },
  plugins: [
    recordPlugin
  ]
})

init(store)

export default window.store = store
