'use strict'

import { mapSpacing } from '@symbo.ls/scratch'

export const Position = {
  props: {},

  class: {
    position: ({ props }) => props.position && ({ position: props.position }),
    inset: ({ props }) => {
      const { inset } = props
      if (typeof inset !== 'string') return
      return { inset: inset.split(' ').map(v => mapSpacing(v, 'k').k).join(' ') }
    },

    left: ({ props }) => mapSpacing(props.left, 'left'),
    top: ({ props }) => mapSpacing(props.top, 'top'),
    right: ({ props }) => mapSpacing(props.right, 'right'),
    bottom: ({ props }) => mapSpacing(props.bottom, 'bottom')
  }
}
