'use strict'

import { Icon, Text } from '../'
import style from './style'

export default {
  style,

  proto: [Text],

  props: {
    icon: 'arrowMediumDown'
  },

  icon: { proto: Icon },

  text: ({ props }) => props.text
}
