'use strict'

import { SPACING, mapSpacing } from '@rackai/scratch'
import style from './style'

export const Block = {
  style,

  props: {
    ratio: SPACING.ratio
  },

  class: {
    width: ({ props }) => mapSpacing(props.width, 'width'),
    height: ({ props }) => mapSpacing(props.height, 'height'),
    padding: ({ props }) => mapSpacing(props.spacing, 'padding'),
    gap: ({ props }) => mapSpacing(props.gap, 'gap')
  }
}
