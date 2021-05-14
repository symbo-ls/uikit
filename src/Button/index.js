'use strict'

import { Shape, IconText, Direction } from '../'

import style from './style'

const Button = {
  tag: 'button',
  proto: [Shape, IconText, Direction],
  style
}

// export const SquareButton = {
//   proto: Button
// }

export const CircleButton = {
  proto: Button,
  style: { borderRadius: '100%' }
}

// export const RectangleButton = {
//   proto: Button,
//   round: 42,
//   style: {
//     '> svg': { marginRight: '6px' }
//   }
// }

// export const KangorooButton = {
//   proto: RectangleButton,
//   button: {
//     proto: RectangleButton
//   }
// }

export default Button
