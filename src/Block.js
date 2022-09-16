'use strict'

import { getSpacingBasedOnRatio, getSpacingByKey } from '@symbo.ls/scratch'

export const Block = {
  class: {
    boxSizing: ({ props }) => props.boxSizing ? ({ display: props.boxSizing }) : {
      boxSizing: 'border-box'
    },

    display: ({ props }) => props.display && ({ display: props.display }),

    hide: ({ props }) => props.hide && ({ display: 'none' }),

    width: ({ props }) => props.width && getSpacingBasedOnRatio(props, 'width'),
    height: ({ props }) => props.height && getSpacingBasedOnRatio(props, 'height'),
    boxSize: ({ props }) => {
      if (typeof props.boxSize !== 'string') return
      const [height, width] = props.boxSize.split(' ')
      return {
        ...getSpacingByKey(height, 'height'),
        ...getSpacingByKey(width || height, 'width')
      }
    },

    maxWidth: ({ props }) => props.maxWidth && getSpacingBasedOnRatio(props, 'maxWidth'),
    minWidth: ({ props }) => props.minWidth && getSpacingBasedOnRatio(props, 'minWidth'),
    widthRange: ({ props }) => {
      if (typeof props.widthRange !== 'string') return
      const [minWidth, maxWidth] = props.widthRange.split(' ')
      return {
        ...getSpacingByKey(minWidth, 'minWidth'),
        ...getSpacingByKey(maxWidth || minWidth, 'maxWidth')
      }
    },

    maxHeight: ({ props }) => props.maxHeight && getSpacingBasedOnRatio(props, 'maxHeight'),
    minHeight: ({ props }) => props.minHeight && getSpacingBasedOnRatio(props, 'minHeight'),
    heightRange: ({ props }) => {
      if (typeof props.heightRange !== 'string') return
      const [minHeight, maxHeight] = props.heightRange.split(' ')
      return {
        ...getSpacingByKey(minHeight, 'minHeight'),
        ...getSpacingByKey(maxHeight || minHeight, 'maxHeight')
      }
    },

    aspectRatio: ({ props }) => props.aspectRatio && ({ aspectRatio: props.aspectRatio }),

    borderWidth: ({ props }) => props.borderWidth ? getSpacingBasedOnRatio(props, 'borderWidth') : null,

    padding: ({ props }) => props.padding ? getSpacingBasedOnRatio(props, 'padding') : null,
    margin: ({ props }) => props.margin ? getSpacingBasedOnRatio(props, 'margin') : null,

    gap: ({ props }) => props.gap ? getSpacingBasedOnRatio(props, 'gap') : null,
    gridArea: ({ props }) => props.gridArea && ({ gridArea: props.gridArea }),

    flex: ({ props }) => props.flex && ({ flex: props.flex }),
    alignItems: ({ props }) => props.alignItems && ({ alignItems: props.alignItems }),
    alignContent: ({ props }) => props.alignContent && ({ alignContent: props.alignContent }),
    justifyContent: ({ props }) => props.justifyContent && ({ justifyContent: props.justifyContent }),
    flexDirection: ({ props }) => props.flexDirection && ({ flexDirection: props.flexDirection }),
    alignSelf: ({ props }) => props.alignSelf && ({ alignSelf: props.alignSelf }),
    order: ({ props }) => props.order && ({ order: props.order }),

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
