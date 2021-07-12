'use strict'

import { Icon, Text } from '../'
import style from './style'

export const IconText = {
  style,

  proto: [Text],

  props: {
    icon: 'arrowMediumDown'
  },

  icon: { proto: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
