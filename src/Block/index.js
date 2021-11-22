'use strict'

import { SPACING, mapSpacing } from '@rackai/scratch'
import style from './style'

export const mapBasedOnRatio = (props, prop) => {
  const { spacingRatio } = props
  const val = props[prop]
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
    width: ({ props }) => props.width && mapSpacing(props.width, 'width'),
    height: ({ props }) => props.height && mapSpacing(props.height, 'height'),
    boxSize: ({ props }) => {
      if (typeof props.boxSize !== 'string') return
      const [width, height] = props.boxSize.split(' ')
      return {
        ...mapSpacing(width, 'width'),
        ...mapSpacing(height, 'height')
      }
    },

    maxWidth: ({ props }) => props.maxWidth && mapSpacing(props.maxWidth, 'maxWidth'),
    minWidth: ({ props }) => props.minWidth && mapSpacing(props.minWidth, 'minWidth'),
    widthRange: ({ props }) => {
      if (typeof props.widthRange !== 'string') return
      const [minWidth, maxWidth] = props.widthRange.split(' ')
      return {
        ...mapSpacing(minWidth, 'minWidth'),
        ...mapSpacing(maxWidth, 'maxWidth')
      }
    },

    maxHeight: ({ props }) => props.maxHeight && mapSpacing(props.maxHeight, 'maxHeight'),
    minHeight: ({ props }) => props.minHeight && mapSpacing(props.minHeight, 'minHeight'),
    heightRange: ({ props }) => {
      if (typeof props.heightRange !== 'string') return
      const [minHeight, maxHeight] = props.heightRange.split(' ')
      return {
        ...mapSpacing(minHeight, 'minHeight'),
        ...mapSpacing(maxHeight, 'maxHeight')
      }
    },

    aspectRatio: ({ props }) => ({ aspectRatio: props.aspectRatio }),

    padding: ({ props }) => mapBasedOnRatio(props, 'padding'),
    margin: ({ props }) => mapBasedOnRatio(props, 'margin'),
    gap: ({ props }) => mapBasedOnRatio(props, 'gap'),

    flexFlow: ({ props }) => props.flexFlow && ({
      display: 'flex',
      flexFlow: props.flexFlow
    }),
    flexAlign: ({ props }) => {
      if (typeof props.flexAlign !== 'string') return
      const [alignItems, justifyContent] = props.flexAlign.split(' ')
      return {
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent
      }
    }
  }
}
