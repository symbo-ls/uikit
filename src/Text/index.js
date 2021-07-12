'use strict'

import { mapFontSize } from '@rackai/scratch'
import style from './style'

export const Text = {
  style,

  props: {
    size: 'A',
    text: ''
  },

  text: ({ props }) => props.text,

  class: {
    size: ({ props }) => mapFontSize(props.size)
  }
}
