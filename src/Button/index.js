'use strict'

import { Shape, IconText, Direction } from '../'

import style from './style'

const Button = {
  tag: 'button',
  proto: [Shape, IconText, Direction],
  style
}

export const SquareButton = {
  proto: Button,
  // round: 10,
  style: {
    width: '42px',
    justifyContent: 'center'
  }
}

export const CircleButton = {
  proto: [Button, SquareButton],
  round: 42
}

export const RectangleButton = {
  proto: Button,
  round: 42,
  style: {
    '> svg': { marginRight: '6px' }
  }
}

export const KangorooButton = {
  proto: RectangleButton,
  button: {
    proto: RectangleButton
  }
}

export default Button
