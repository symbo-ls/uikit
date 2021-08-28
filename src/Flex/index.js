'use strict'

import style from './style'

export const Flex = {
  style,

  props: {
    flexDirection: 'row',
    alignItems: '',
    justifyContent: ''
  },

  class: {
    flexDirection: ({ props }) => ({ flexDirection: props.flexDirection }),
    alignItems: ({ props }) => ({ alignItems: props.alignItems }),
    justifyContent: ({ props }) => ({ justifyContent: props.justifyContent })
  }
}
