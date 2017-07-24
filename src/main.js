import './styles/index.css'
import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store'
import 'src/actions/listeners/keypress.js'
import 'src/actions/store-watch/keypress.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
})
