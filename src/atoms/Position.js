'use strict'

import { getSpacingByKey } from '@symbo.ls/scratch'

export const Position = {
  props: {},

  class: {
    position: ({ props }) => props.position && ({ position: props.position }),
    inset: ({ props }) => {
      const { inset } = props
      if (typeof inset !== 'string') return
      return { inset: inset.split(' ').map(v => getSpacingByKey(v, 'k').k).join(' ') }
    },

    left: ({ props }) => getSpacingByKey(props.left, 'left'),
    top: ({ props }) => getSpacingByKey(props.top, 'top'),
    right: ({ props }) => getSpacingByKey(props.right, 'right'),
    bottom: ({ props }) => getSpacingByKey(props.bottom, 'bottom')
  }
}
