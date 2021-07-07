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
      const result = mapPadding(props.spacing)
      console.log(props.spacing, result)
      return result
    }
  }
}

export default Block
