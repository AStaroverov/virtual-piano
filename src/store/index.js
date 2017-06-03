import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import keyboard from './modules/keyboard'

export default new Vuex.Store({
  modules: {
    keyboard
  }
})
