'use strict'

import { mapFontSize } from '@rackai/scratch/src/config/typography'
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
