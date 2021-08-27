'use strict'

import { Shape, Block, IconText, Direction, Text } from '../'

import style from './style'

export const Button = {
  proto: [Shape, Block, IconText, Direction],
  tag: 'button',
  style,
  props: {
    type: 'button'
  },
  attr: {
    type: ({ props }) => props.type
  }
}

export const SquareButton = {
  proto: Button,
  props: {
    round: 'X2'
  },
  style: {
    justifyContent: 'center',
    boxSizing: 'content-box'
  }
}

export const CircleButton = {
  proto: SquareButton,
  props: {
    round: 'D'
  }
}

export const KangorooButton = {
  tag: 'button',
  proto: [Shape, Direction, Block, Text],
  style,

  iconText: {
    proto: IconText
  },
  child: {
    proto: [Shape, Block, IconText]
  }
}

export default Button
