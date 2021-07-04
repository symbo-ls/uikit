'use strict'

import style from './style'

export default {
  props: {
    direction: 'ltr'
  },
  class: {
    direction: ({ props }) => style[props.direction]
  }
}
