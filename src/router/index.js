import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MusicalTexts from 'components/musical-text'

export default new Router({
  routes: [
    {
      path: '/musical-texts/:name',
      name: 'musical-text',
      component: MusicalTexts
    }
  ]
})
