'use strict'

import style from './style'
import { Icon } from '..'

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
