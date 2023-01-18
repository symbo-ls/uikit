'use strict'

import { init } from 'smbls'

const ANIMATION = {
  fadeInUp: {
    from: {
      transform: 'translate3d(0, 12.5%, 1px)',
      opacity: 0
    },
    to: {
      transform: 'translate3d(0, 0, 1px)',
      opacity: 1
    }
  },
  fadeOutDown: {
    from: {
      transform: 'translate3d(0, 0, 1px)',
      opacity: 1
    },
    to: {
      transform: 'translate3d(0, 12.5%, 1px)',
      opacity: 0
    }
  }
}
const COLOR = {
  black: '#000000',
  blue: '#3686F7'
}

init({
  COLOR,
  ANIMATION
})
