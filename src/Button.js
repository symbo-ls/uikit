'use strict'

import { IconText } from '.'

const css = {
  appearance: 'none',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  fontFamily: 'inherit'
}

export const Button = {
  proto: IconText,
  tag: 'button',
  props: {
    type: 'button',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    css
  },
  attr: {
    type: ({ props }) => props.type
  }
}

export const SquareButton = {
  proto: Button,
  props: {
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    justifyContent: 'center',
    round: 'Z',
    css: { boxSizing: 'content-box' }
  }
}

export const CircleButton = {
  proto: SquareButton,
  props: { round: 'C' }
}

export const KangorooButton = {
  tag: 'button',
  props: { css },

  iconText: { proto: IconText },
  child: { proto: IconText }
}
