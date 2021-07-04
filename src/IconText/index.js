'use strict'

import { Icon, Text } from '../'
import style, { size } from './style'

export default {
  style,

  proto: [Text],

  props: {
    icon: 'arrowMediumDown'
  },

  icon: {
    proto: Icon,
    name: ({ props }) => props.icon
  },

  text: ({ props }) => props.text
}
