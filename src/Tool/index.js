'use strict'

import { Icon, buttonSquare, Shape } from '..'

import style, { styleRangeSlider } from './style'

const rangeSlider = {
  tag: 'input',
  style: styleRangeSlider,
  attr: { type: 'range' }
}

export const rangeSliderTool = {
  style: style,
  icon: {
    proto: Icon,
    name: 'fontSize'
  },
  tool: {
    proto: Shape,
    round: 6,
    button: {
      proto: buttonSquare,
      theme: 'white',
      icon: 'minus',
      round: 6
    },
    span: '16px',
    rangeSlider,
    button2: {
      proto: buttonSquare,
      theme: 'white',
      icon: 'plus',
      round: 6
    }
  }
}
