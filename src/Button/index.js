'use strict'

import { Shape, IconText, Direction } from '../'

import style from './style'

const Button = {
  tag: 'button',
  proto: [Shape, IconText, Direction],
  style
}

export const CircleButton = {
  proto: Button,
  style: { borderRadius: '100%' }
}

export const KangorooButton = {
  proto: Button,
  button: {
    proto: Button
  }
}

export default Button
