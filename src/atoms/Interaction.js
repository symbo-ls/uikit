'use strict'

export const Interaction = {
  class: {
    pointerEvents: ({ props }) => props.pointerEvents && ({ pointerEvents: props.pointerEvents }),
    cursor: ({ props }) => props.cursor && ({ cursor: props.cursor })
  }
}

export const Hoverable = {
  props: {
    transition: 'B',
    transitionProperty: 'opacity, transform',
    opacity: 0.85,

    ':hover': {
      opacity: 0.9,
      transform: 'scale(1.015)'
    },
    ':active': {
      opacity: 1,
      transform: 'scale(1.015)'
    },
    '.active': {
      opacity: 1
    }
  }
}

export const Focusable = {
  props: {
    border: 'none',
    outline: 'none',
    ':focus-visible': {
      opacity: 1,
      outline: 'solid, X, blue .3'
    }
  },

  attr: {
    placeholder: ({ props }) => props.placeholder
  }
}
