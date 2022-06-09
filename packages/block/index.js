'use strict'

import { SPACING, mapSpacing } from '@symbo.ls/scratch'

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
  props: {},

  class: {
    display: ({ props }) => ({ display: props.display }),

    width: ({ props }) => props.width && mapBasedOnRatio(props, 'width'),
    height: ({ props }) => props.height && mapBasedOnRatio(props, 'height'),
    boxSize: ({ props }) => {
      if (typeof props.boxSize !== 'string') return
      const [width, height] = props.boxSize.split(' ')
      return {
        ...mapSpacing(width, 'width'),
        ...mapSpacing(height, 'height')
      }
    },

    maxWidth: ({ props }) => props.maxWidth && mapBasedOnRatio(props, 'maxWidth'),
    minWidth: ({ props }) => props.minWidth && mapBasedOnRatio(props, 'minWidth'),
    widthRange: ({ props }) => {
      if (typeof props.widthRange !== 'string') return
      const [minWidth, maxWidth] = props.widthRange.split(' ')
      return {
        ...mapSpacing(minWidth, 'minWidth'),
        ...mapSpacing(maxWidth, 'maxWidth')
      }
    },

    maxHeight: ({ props }) => props.maxHeight && mapBasedOnRatio(props, 'maxHeight'),
    minHeight: ({ props }) => props.minHeight && mapBasedOnRatio(props, 'minHeight'),
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
    },
    flex: ({ props }) => props.flex && ({ flex: props.flex }),

    size: ({ props }) => {
      // if (typeof props.size !== 'string') return
      // const [fontSize, padding, margin] = props.size.split(' ')
    }
  }
}
