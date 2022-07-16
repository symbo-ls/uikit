'use strict'

export const Transition = {
  class: {
    transition: ({ props }) => props.transition && ({ transition: props.transition }),
    transitionProperty: ({ props }) => props.transitionProperty && ({
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    })
  }
}
