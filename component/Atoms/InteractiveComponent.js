'use strict'

const style = {
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit'
}

export const Hoverable = {
  props: {
    transition: 'C defaultBezier',
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

export const FocusableComponent = {
  extend: Focusable,
  tag: 'button',
  props: {
    fontSize: 'A',
    type: 'button',
    border: 'none',
    textDecoration: 'none',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    style
  },
  attr: {
    type: ({ props }) => props.type
  }
}
