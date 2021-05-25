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
  style: styleRangeSlider,
  attr: { type: 'range' }
}

export const RangeSliderTool = {
  class: { styleTool },
  proto: Shape,
  round: 6,
  less: {
    proto: SquareButton,
    icon: 'minus'
  },
  value: {
    tag: 'span',
    style: { margin: '0 8px' }
  },
  range: { proto: RangeSlider },
  more: {
    proto: SquareButton,
    icon: 'plus'
  }
}

export const SelectTool = {
  class: { styleTool },
  proto: Shape,
  theme: 'greyWhite',
  span: 'Font Size',
  button: {
    proto: SquareButton
  }
}
