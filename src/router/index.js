import Vue from 'vue'
import Router from 'vue-router'
import MusicalTexts from 'components/musical-text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musical-texts/:name',
      name: 'musical-text',
      component: MusicalTexts
    }
  ]
})
