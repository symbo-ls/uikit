'use strict'

export const Interaction = {
  class: {
    userSelect: ({ props }) => props.userSelect && ({ userSelect: props.userSelect }),
    pointerEvents: ({ props }) => props.pointerEvents && ({ pointerEvents: props.pointerEvents }),
    cursor: ({ props }) => props.cursor && ({ cursor: props.cursor })
  }
}

export const Hoverable = {
  props: {
    transition: 'B default-bezier',
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
      opacity: 1,
      transform: 'scale(1.015)',

      ':hover': { opacity: 1 }
    }
  }
}

export const Clickable = {
  extend: Hoverable,
  props: {
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
    outline: 'solid, 0, blue .3',
    ':focus-visible': {
      opacity: 1,
      outline: 'solid, X, blue .3'
    }
  },

  attr: {
    placeholder: ({ props }) => props.placeholder,
    tabIndex: ({ props }) => props.tabIndex
  }
}
