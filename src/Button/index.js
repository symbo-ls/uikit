'use strict'

import style from './style'
import { Shape } from '../'

var Button = {
  proto: Shape,

  tag: 'button',
  style,

  on: {
    click: (event, element) => console.log(event)
  }
}

export default Button
