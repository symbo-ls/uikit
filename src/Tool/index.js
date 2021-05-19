'use strict'

import { SquareButton, Shape } from '..'
import * as Scratch from '@rackai/scratch'

import { styleRangeSlider, styleSelect } from './style'

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
  proto: Shape,
  theme: 'greyWhite',
  style: {
    position: 'relative'
  },
  select: {
    proto: Shape,
    theme: 'transparent',
    style: styleSelect,
    attr: {
      name: 'user',
      id: 'user'
    },
    childProto: { tag: 'option' },
    ...[
      { text: 'adam' },
      { text: 'jora' }
    ]
  },
  button: {
    proto: SquareButton,
    icon: 'code',
    style: {
      position: 'absolute',
      right: '4px',
      pointerEvents: 'none'
    }
  }
}
