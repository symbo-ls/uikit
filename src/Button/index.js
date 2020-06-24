'use strict'

import style from './style'
import { Shape } from '../'

var Button = {
  proto: Shape,

  tag: 'button',
  style
}

var search = {
  proto: Button,
  style: {},
  shape: 'round',
  theme: 'primary'
}

export default Button
