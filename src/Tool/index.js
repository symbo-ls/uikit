'use strict'

import { SquareButton, Shape } from '..'
import * as Scratch from '@rackai/scratch'

import { styleRangeSlider, styleTool } from './style'

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

const RangeSlider = {
  proto: Shape,
  tag: 'input',
  theme: 'sliderThumb',
  attr: { type: 'range' }
}

export default {
  proto: Shape,
  round: 6,
  button: {
    proto: SquareButton,
    icon: ''
  },
  value: {
    tag: 'span',
    text: '16px'
  },
  range: { proto: RangeSlider },
  button2: {
    proto: SquareButton,
    icon: ''
  }
}
