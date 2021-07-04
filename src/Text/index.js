'use strict'

import { mapFontSize } from '..'
import style from './style'

const Text = {
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

export default Text
