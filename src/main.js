import './styles/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'actions/listeners/keypress.js'
import 'actions/store-watch/keypress.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
