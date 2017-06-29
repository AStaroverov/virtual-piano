import Vue from 'vue'
import Router from 'vue-router'

import ActiveMusicalText from 'src/components/musical-text'
import SubMenuMusicalTexts from 'src/components/left-menu/musical-texts'
import CustomText from 'src/components/custom-text'

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
    },
    {
      path: '/custom-text/',
      name: 'custom-text',
      components: {
        'lower-piano': CustomText
      }
    }
  ]
})
