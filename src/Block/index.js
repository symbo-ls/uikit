'use strict'

import { Theme, Typography, Unit, Spacing } from '@rackai/scratch'
import { mapPadding } from '@rackai/scratch/src/config/spacing'
import style from './style'

const Block = {
  style,

  props: {
    ratio: Spacing.ratio,
    spacing: 'A'
  },

  class: {
    padding: ({ props }) => {
      // console.log(mapPadding(props.spacing))
      return mapPadding(props.spacing)
    }
  }
}

export default Block
