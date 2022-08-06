'use strict'

import { mapBasedOnRatio } from '@symbo.ls/block'

export const Flex = {
  props: {
    display: 'flex',
    flow: 'row'
  },

  class: {
    flow: ({ props }) => props.flow && ({ flexFlow: props.flow }),
    flexDirection: ({ props }) => props.flexDirection && ({ flexDirection: props.flexDirection }),
    alignItems: ({ props }) => props.alignItems && ({ alignItems: props.alignItems }),
    alignContent: ({ props }) => props.alignContent && ({ alignContent: props.alignContent }),
    justifyContent: ({ props }) => props.justifyContent && ({ justifyContent: props.justifyContent }),
    gap: ({ props }) => props.gap && mapBasedOnRatio(props, 'gap'),

    align: ({ props }) => {
      if (typeof props.align !== 'string') return
      const [alignItems, justifyContent] = props.align.split(' ')
      return {
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent
      }
    }
  }
}
