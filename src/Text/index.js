'use strict'

import { Theme, Typography, Unit } from '@rackai/scratch'
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
    size: ({ props }) => {
      console.log('props:')
      console.log(props)
      return mapFontSize(
        `--font-size-${props.size.toUpperCase()}`
      )
    }
  }
}



export default Text
