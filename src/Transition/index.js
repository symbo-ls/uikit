'use strict'

export const Transition = {
  class: {
    transition: ({ props }) => ({ transition: props.transition }),
    transitionProperty: ({ props }) => ({
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    })
  }
}
