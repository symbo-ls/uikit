'use strict'

import style from './style'

export const Flex = {
  style,

  props: {
    flexDirection: 'row'
  },

  class: {
    flexDirection: ({ props }) => ({ flexDirection: props.flexDirection })
  }
}
