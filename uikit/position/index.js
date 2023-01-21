'use strict'

import { getSpacingBasedOnRatio } from '@symbo.ls/scratch'

export const Position = {
  props: {},

  class: {
    position: ({ props }) => props.position && ({ position: props.position }),
    inset: ({ props }) => {
      const { inset } = props
      if (typeof inset !== 'string') return
      return { inset: inset.split(' ').map(v => getSpacingBasedOnRatio(v,'k').k).join(' ') }
    },

    left: ({ props }) => getSpacingBasedOnRatio(props.left, 'left'),
    top: ({ props }) => getSpacingBasedOnRatio(props.top, 'top'),
    right: ({ props }) => getSpacingBasedOnRatio(props.right, 'right'),
    bottom: ({ props }) => getSpacingBasedOnRatio(props.bottom, 'bottom')
  }
}
