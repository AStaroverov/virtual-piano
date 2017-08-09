import * as keyboardTypes from 'src/store/types/keyboard'

import { connect } from 'vuex-connect'
import events from 'src/modules/event-bus'

import Comp from 'src/components/track-road/index.vue'

export default connect({
  methodsToProps: {
    onKeyup (_, cb) {
      events.on(keyboardTypes.KEYUP, cb)
    },
    onKeydown (_, cb) {
      events.on(keyboardTypes.KEYDOWN, cb)
    }
  }
})('track-road', Comp)
