'use strict'

import { Shape, IconText, Direction } from '../'

import style from './style'

const Button = {
  tag: 'button',
  proto: [Shape, IconText, Direction],
  style
}

export const buttonSquare = {
  proto: Button,
  round: 10,
  style: {
    width: '42px',
    justifyContent: 'center'
  }
}

export const buttonCircle = {
  proto: [Button, buttonSquare],
  round: 10
  // theme: 'blue'
}

export const buttonRectangle = {
  proto: Button,
  round: 42,
  style: {
    '> svg': { marginRight: '6px' }
  }
}

export const buttonKangoroo = {
  proto: buttonRectangle,
  round: 42,
  button: {
    proto: buttonRectangle
  }
}

export default Button
