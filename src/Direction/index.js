'use strict'

import style from './style'

export default {
  define: {
    direction: param => param || 'ltr'
  },
  class: {
    direction: element => style[element.direction]
  }
}
