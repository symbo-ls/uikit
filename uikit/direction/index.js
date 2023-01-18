'use strict'

export const Direction = {
  props: {
    direction: 'ltr'
  },
  class: {
    direction: ({ props }) => ({ direction: props.direction })
  }
}
