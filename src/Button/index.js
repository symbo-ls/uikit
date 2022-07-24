'use strict'

import { Shape, Block, IconText, Direction } from '../'

import style from './style'

export const Button = {
  proto: IconText,
  tag: 'button',
  style,
  props: {
    type: 'button',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
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
    round: 'Z'
  },
  class: {
    squareButton: { boxSizing: 'content-box' }
  }
}

export const CircleButton = {
  proto: SquareButton,
  props: { round: 'C' }
}

export const KangorooButton = {
  tag: 'button',
  style,

  iconText: {
    proto: IconText
  },

  child: {
    proto: [IconText]
  }
}

export default Button
