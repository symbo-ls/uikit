'use strict'

import style from './style'
import { Icon } from '..'

var IconText = {
  style,
  class: {},

  define: {
    icon: param => param || 'left'
  },

  _icon: {
    proto: Icon,
    name: element => element.parent.icon
  },

  text: ''
}

export default IconText
