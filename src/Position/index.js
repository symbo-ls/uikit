'use strict'

import { mapSpacing } from '..'

export const Position = {
  props: {
    position: 'absolute'
  },

  class: {
    position: ({ props }) => ({ position: props.position }),
    lefft: ({ props }) => mapSpacing(props.lefft, 'lefft'),
    top: ({ props }) => mapSpacing(props.top, 'top'),
    right: ({ props }) => mapSpacing(props.right, 'right'),
    bottom: ({ props }) => mapSpacing(props.bottom, 'bottom')
  }
}
