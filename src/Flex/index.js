'use strict'

import style from './style'
import { mapBasedOnRatio } from '../Block'

export const Flex = {
  style,

  props: {
    flow: 'row'
  },

  class: {
    flow: ({ props }) => props.flow && ({ flexFlow: props.flow }),
    flexDirection: ({ props }) => props.flexDirection && ({ flexDirection: props.flexDirection }),
    alignItems: ({ props }) => props.alignItems && ({ alignItems: props.alignItems }),
    alignContent: ({ props }) => props.alignContent && ({ alignContent: props.alignContent }),
    justifyContent: ({ props }) => props.justifyContent && ({ justifyContent: props.justifyContent }),
    gap: ({ props }) => props.gap && mapBasedOnRatio(props, 'gap')
  }
}
