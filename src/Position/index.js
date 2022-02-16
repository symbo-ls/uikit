'use strict'

import { mapSpacing } from '@symbols/scratch'

export const Position = {
  props: {},

  class: {
    position: ({ props }) => props.position && ({ position: props.position }),
    positionAxes: ({ props }) => {
      const { positionAxes } = props
      if (typeof positionAxes !== 'string') return
      const [left, top, right, bottom] = positionAxes.split(' ')
      return {
        left: mapSpacing(left, 'left'),
        top: mapSpacing(top, 'top'),
        right: mapSpacing(right, 'right'),
        bottom: mapSpacing(bottom, 'bottom')
      }
    },

    left: ({ props }) => mapSpacing(props.left, 'left'),
    top: ({ props }) => mapSpacing(props.top, 'top'),
    right: ({ props }) => mapSpacing(props.right, 'right'),
    bottom: ({ props }) => mapSpacing(props.bottom, 'bottom')
  }
}
