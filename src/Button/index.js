'use strict'

import { Shape, Block, IconText, Direction } from '../'

import style from './style'

export const Button = {
  tag: 'button',
  style,
  proto: [Shape, Block, IconText, Direction]
}

export const SquareButton = {
  proto: Button,
  style: {
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    boxSizing: 'content-box'
  }
}

export const CircleButton = {
  proto: SquareButton,
  props: {
    round: '100%'
  }
}

export const KangorooButton = {
  proto: Button,
  span: {
    proto: [Shape, IconText, Direction]
  }
}

export default Button
