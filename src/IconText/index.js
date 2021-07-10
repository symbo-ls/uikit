'use strict'

import { Icon, Text } from '../'
import style, { size } from './style'

export default {
  style,

  proto: [Text],

  props: {
    icon: 'arrowMediumDown'
  },

  icon: { proto: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
