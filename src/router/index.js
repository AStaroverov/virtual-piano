import Vue from 'vue'
import Router from 'vue-router'

import Signup from 'src/components/signup/index.vue'
import Signin from 'src/components/signin/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'signup',
      components: {
        auth: Signup
      }
    },
    {
      path: '/signin',
      name: 'signin',
      components: {
        auth: Signin
      }
    }
  ]
})
