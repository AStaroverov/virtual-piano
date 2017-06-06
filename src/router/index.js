import Vue from 'vue'
import Router from 'vue-router'

import ActiveMusicalText from 'components/musical-text'
import SubMenuMusicalTexts from 'components/left-menu/musical-texts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musical-texts/',
      name: 'musical-texts',
      components: {
        'sub-menu': SubMenuMusicalTexts
      }
    },
    {
      path: '/musical-texts/:name',
      name: 'musical-text',
      components: {
        'lower-piano': ActiveMusicalText
      }
    }
  ]
})
