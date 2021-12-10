'use strict'

import { mapFontSize } from '@symbo.ls/scratch'
import style from './style'

export const Text = {
  style,

  props: {
    text: ''
  },

  text: ({ props }) => props.text,

  class: {
    size: ({ props }) => props.size && mapFontSize(props.size)
  }
}
