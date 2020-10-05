'use strict'

import { Icon } from '^'
import style from './style'

export default {
  style,

  define: {
    icon: param => param || 'left'
  },

  _icon: {
    proto: Icon,
    name: element => element.parent.icon
  },

  text: ''
}
