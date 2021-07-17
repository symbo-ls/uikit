'use strict'

import { Shape, Block, IconText, Direction, Text } from '../'

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
    round: 'D'
  }
}

export const KangorooButton = {
  tag: 'button',
  proto: [Shape, Direction, Block, Text],
  style,
  props: {
    gap: 'X'
  },

  iconText: {
    proto: IconText
  },
  child: {
    proto: [Shape, Block, IconText]
  }
}

export default Button
