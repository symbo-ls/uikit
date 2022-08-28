'use strict'

import { SPACING, getSpacingByKey } from '@symbo.ls/scratch'

export const mapBasedOnRatio = (props, prop, unit) => {
  const { spacingRatio } = props
  const val = props[prop]
  // TODO: move this to getSpacingByKey
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

    return getSpacingByKey(val, prop, params, unit)
  }
  return getSpacingByKey(val, prop, null, unit)
}

export const Block = {
  class: {
    boxSizing: ({ props }) => props.boxSizing ? ({ display: props.boxSizing }) : {
      boxSizing: 'border-box'
    },

    display: ({ props }) => props.display && ({ display: props.display }),

    hide: ({ props }) => props.hide && ({ display: 'none' }),

    width: ({ props }) => props.width && mapBasedOnRatio(props, 'width'),
    height: ({ props }) => props.height && mapBasedOnRatio(props, 'height'),
    boxSize: ({ props }) => {
      if (typeof props.boxSize !== 'string') return
      const [height, width] = props.boxSize.split(' ')
      return {
        ...getSpacingByKey(height, 'height'),
        ...getSpacingByKey(width || height, 'width')
      }
    },

    maxWidth: ({ props }) => props.maxWidth && mapBasedOnRatio(props, 'maxWidth'),
    minWidth: ({ props }) => props.minWidth && mapBasedOnRatio(props, 'minWidth'),
    widthRange: ({ props }) => {
      if (typeof props.widthRange !== 'string') return
      const [minWidth, maxWidth] = props.widthRange.split(' ')
      return {
        ...getSpacingByKey(minWidth, 'minWidth'),
        ...getSpacingByKey(maxWidth, 'maxWidth')
      }
    },

    maxHeight: ({ props }) => props.maxHeight && mapBasedOnRatio(props, 'maxHeight'),
    minHeight: ({ props }) => props.minHeight && mapBasedOnRatio(props, 'minHeight'),
    heightRange: ({ props }) => {
      if (typeof props.heightRange !== 'string') return
      const [minHeight, maxHeight] = props.heightRange.split(' ')
      return {
        ...getSpacingByKey(minHeight, 'minHeight'),
        ...getSpacingByKey(maxHeight || minHeight, 'maxHeight')
      }
    },

    aspectRatio: ({ props }) => props.aspectRatio && ({ aspectRatio: props.aspectRatio }),

    borderWidth: ({ props }) => props.borderWidth ? mapBasedOnRatio(props, 'borderWidth') : null,

    padding: ({ props }) => props.padding ? mapBasedOnRatio(props, 'padding') : null,
    margin: ({ props }) => props.margin ? mapBasedOnRatio(props, 'margin') : null,

    gap: ({ props }) => props.gap ? mapBasedOnRatio(props, 'gap') : null,
    gridArea: ({ props }) => props.gridArea && ({ gridArea: props.gridArea }),

    flex: ({ props }) => props.flex && ({ flex: props.flex }),
    alignItems: ({ props }) => props.alignItems && ({ alignItems: props.alignItems }),
    alignContent: ({ props }) => props.alignContent && ({ alignContent: props.alignContent }),
    justifyContent: ({ props }) => props.justifyContent && ({ justifyContent: props.justifyContent }),
    flexDirection: ({ props }) => props.flexDirection && ({ flexDirection: props.flexDirection }),
    alignSelf: ({ props }) => props.alignSelf && ({ alignSelf: props.alignSelf }),

    flexWrap: ({ props }) => props.flexWrap && ({
      display: 'flex',
      flexFlow: props.flexWrap
    }),
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

    gridColumn: ({ props }) => props.gridColumn && ({ gridColumn: props.gridColumn }),
    gridRow: ({ props }) => props.gridRow && ({ gridRow: props.gridRow }),

    size: ({ props }) => {
      if (typeof props.heightRange !== 'string') return
      const [minHeight, maxHeight] = props.heightRange.split(' ')
      return {
        ...getSpacingByKey(minHeight, 'minHeight'),
        ...getSpacingByKey(maxHeight || minHeight, 'maxHeight')
      }
    }
  }
}
