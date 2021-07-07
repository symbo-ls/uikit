'use strict'

export default {
  props: {
    direction: 'ltr'
  },
  class: {
    direction: ({ props }) => ({ direction: props.direction })
  }
}
