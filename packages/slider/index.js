'use strict'

import style from './style'

import { SquareButton } from '@symbo.ls/button'
import { Shape } from '@symbo.ls/shape'

import * as Scratch from '@symbo.ls/scratch'
import { isFunction } from '@domql/utils'

// TODO: fix this
Scratch.setValue('THEME', {
  background: 'white 0.2',

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
}, 'sliderThumb')

export const RangeSlider = {
  style,
  extends: Shape,
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
  extends: [Shape],

  button0: {
    extends: [SquareButton],
    props: {
      icon: 'minus'
    },
    on: {
      click: (ev, el, s) => {
        el.parent.parent.props.minusClick(ev, el, s)
      }
    }
  },
  value: {
    tag: 'span',
    // class: { w: { minWidth: `4ch` } },
    text: (el, s) => `${findOut(el, s, 'value', 50)}${findOut(el, s, 'type') === 'fontSize' ? 'px' : ''}`
  },
  range: {
    extends: RangeSlider,
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
    extends: [SquareButton],
    props: {
      icon: 'plus'
    },
    on: {
      click: (ev, el, s) => {
        el.parent.parent.props.plusClick(ev, el, s)
      }
    }
  }
}
