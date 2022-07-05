'use strict'

import style from './style'
import { mapBasedOnRatio } from '../Block'

export const Flex = {
  style,

  props: {
    flow: 'row'
  },

  class: {
    flow: ({ props }) => ({ flexFlow: props.flow }),
    flexDirection: ({ props }) => ({ flexDirection: props.flexDirection }),
    alignItems: ({ props }) => ({ alignItems: props.alignItems }),
    alignContent: ({ props }) => ({ alignContent: props.alignContent }),
    justifyContent: ({ props }) => ({ justifyContent: props.justifyContent }),
    gap: ({ props }) => mapBasedOnRatio(props, 'gap')
  }
}
