'use strict'

import { Icon, buttonSquare, Shape, Field } from '..'
import * as Scratch from '@rackai/scratch'

import style, { styleRangeSlider } from './style'

Scratch.set('theme', {
  name: 'sliderThumb',
  backgroundColor: Scratch.opacify('#fff', 0.2),

  '&::-webkit-slider-thumb': {
    background: '#232526',
    borderColor: Scratch.opacify('#454646', 0.75)
  },

  '&:hover': {
    '&::-webkit-slider-thumb': {
      borderColor: Scratch.opacify('#fff', 0.35)
    }
  },

  '&:focus, &:active': {
    '&::-webkit-slider-thumb': {
      borderColor: '#3C6AC0'
    }
  }
})

const rangeSlider = {
  proto: [Shape, Field],
  theme: 'sliderThumb',
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
    less: {
      proto: buttonSquare,
      theme: 'white',
      icon: 'minus',
      round: 6
    },
    value: {
      tag: 'span',
      style: { width: 36 }
    },
    range: { proto: rangeSlider },
    more: {
      proto: buttonSquare,
      theme: 'white',
      icon: 'plus',
      round: 6
    }
  }
}
