'use strict'

import { Icon, SquareButton, Shape } from '..'
import * as Scratch from '@rackai/scratch'

import style, { styleRangeSlider, styleRangeSliderTool } from './style'

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
  class: { style, styleRangeSliderTool },
  tool: {
    proto: Shape,
    round: 6,
    less: {
      proto: SquareButton,
      icon: 'minus'
    },
    value: {
      tag: 'span',
      style: { width: 36 }
    },
    range: { proto: RangeSlider },
    more: {
      proto: SquareButton,
      icon: 'plus'
    }
  }
}

export const SelectTool = {
  proto: Shape,
  text: 'jbjbj',
  select: {
    attr: {
      name: 'user',
      id: 'user'
    },
    childProto: { tag: 'option' },
    ...[
      { text: 'adam' },
      { text: 'jora' }
    ]
  }
}
