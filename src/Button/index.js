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
  round: 42
}

export const buttonRectangle = {
  proto: Button,
  round: 26,
  style: {
    '> svg': { marginRight: '8px' }
  }
}

export const buttonKangoroo = {
  proto: buttonRectangle,
  button: {
    proto: buttonRectangle
  }
}

export default Button
