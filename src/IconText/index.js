'use strict'

import { Icon } from '../'
import style, { size } from './style'

export default {
  style,

  define: {
    icon: param => param || 'left',
    size: param => param || 'default'
  },

  class: {
    size: element => size[element.size]
  },

  _icon: {
    proto: Icon,
    name: element => element.parent.icon
  },

  text: ''
}
