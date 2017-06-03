import Vue from 'vue'
import Vuex from 'vuex'
import keyboard from './modules/keyboard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    keyboard
  }
})
