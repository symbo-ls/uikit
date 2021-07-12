'use strict'

import { SPACING, mapPadding } from '@rackai/scratch'
import style from './style'

export const Block = {
  style,

  props: {
    ratio: SPACING.ratio,
    spacing: 'A'
  },

  class: {
    padding: ({ props }) => mapPadding(props.spacing)
  }
}
