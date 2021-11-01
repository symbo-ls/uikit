'use strict'

import { SPACING, mapSpacing } from '@rackai/scratch'
import style from './style'

const mapBasedOnRatio = (props, prop) => {
  const { spacingRatio } = props
  const val = props[prop === 'padding' ? 'spacing' : prop]
  if (spacingRatio) {
    const params = SPACING[spacingRatio]

    if (!params) {
      SPACING[spacingRatio] = {
        base: SPACING.base,
        type: 'spacing',
        ratio: spacingRatio,
        range: [-5, +7],
        subSequence: true,
        sequence: {},
        scales: {}
      }
    }

    const result = mapSpacing(val, prop, params)

    return result
  }
  return mapSpacing(val, prop)
}

export const Block = {
  style,

  props: {},

  class: {
    width: ({ props }) => mapSpacing(props.width, 'width'),
    height: ({ props }) => mapSpacing(props.height, 'height'),
    padding: ({ props }) => mapBasedOnRatio(props, 'padding'),
    margin: ({ props }) => mapBasedOnRatio(props, 'margin'),
    gap: ({ props }) => mapBasedOnRatio(props, 'gap')
  }
}
