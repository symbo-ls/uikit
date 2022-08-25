'use strict'

import { IconText } from '.'

const style = {
  appearance: 'none',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  fontFamily: 'inherit'
}

export const Button = {
  extend: IconText,
  tag: 'button',
  props: {
    fontSize: 'A',
    type: 'button',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    padding: 'Z A1',
    fontFamily: 'inherit',
    round: 'C2',
    style
  },
  attr: {
    type: ({ props }) => props.type
  }
}

export const SquareButton = {
  extend: Button,
  props: {
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    justifyContent: 'center',
    round: 'Z',
    style: { boxSizing: 'content-box' }
  }
}

export const CircleButton = {
  extend: SquareButton,
  props: { round: 'C' }
}

export const KangorooButton = {
  tag: 'button',
  props: { style },

  iconText: { extend: IconText },
  child: { extend: IconText }
}
