'use strict'

import { Theme, Typography, Unit, Spacing } from '@rackai/scratch'
import { mapPadding } from '..'
import style from './style'

const Block = {
  style,

  props: {
    ratio: Spacing.ratio,
    spacing: 'A'
  },

  class: {
    padding: ({ props }) => mapPadding(props.spacing)
  }
}



export default Block
