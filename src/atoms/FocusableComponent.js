'use strict'

import { Focusable } from '.'

const style = {
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit'
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
