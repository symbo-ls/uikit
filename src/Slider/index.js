'use strict'

import style from './style'

import { SquareButton, Shape } from '..'
import * as Scratch from '@rackai/scratch'
import { isFunction } from '@rackai/domql/src/utils'

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

export const RangeSlider = {
  style,
  proto: Shape,
  props: {
    theme: 'sliderThumb'
  },

  tag: 'input',
  attr: { type: 'range' }
}

const findOut = (el, s, prop, def) => {
  const val = el.parent.parent.props[prop]
  return isFunction(val) ? val(el, s) : val || def
}

export const Slider = {
  proto: [Shape],

  props: {
    round: 'Z'
  },

  button0: {
    proto: [SquareButton],
    props: (el) => {
      const props = el.parent.parent.props
      return {
        icon: props.button0Icon
      }
    },
    on: {
      click: (ev, el, s) => {
        el.parent.parent.props.minusClick(ev, el, s)
      }
    }
  },
  value: {
    tag: 'span',
    class: { w: { minWidth: `4ch` } },
    text: (el, s) => `${findOut(el, s, 'value', 50)}${findOut(el, s, 'type') === 'fontSize' ? 'px' : ''}`
  },
  range: {
    proto: RangeSlider,
    attr: {
      value: (el, s) => findOut(el, s, 'value', 50),
      min: (el, s) => findOut(el, s, 'min', 0),
      max: (el, s) => findOut(el, s, 'max', 100),
      step: (el, s) => findOut(el, s, 'step', 1)
    },
    on: {
      input: (ev, el, s) => el.parent.parent.props.input(ev, el, s)
    }
  },
  button1: {
    proto: [SquareButton],
    props: (el) => ({
      icon: el.parent.parent.props.button1Icon
    }),
    on: {
      click: (ev, el, s) => {
        el.parent.parent.props.plusClick(ev, el, s)
      }
    }
  }
}
