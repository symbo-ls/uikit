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

const findOut = (el, s, key, def) => {
  const val = el.props[key]
  return isFunction(val) ? val(el, s) : val || def
}

export const Slider = {
  proto: Shape,

  props: {
    round: 6
  },

  minusButton: {
    proto: SquareButton,
    props: ({ parent }) => ({
      icon: parent.props.minusIcon
    }),
    on: {
      click: (ev, el, s) => el.parent.props.minusClick(ev, el, s)
    }
  },
  value: {
    tag: 'span',
    class: {
      // w: (el, s) => ({width: `${el.text.length}ch`})
      w: (el, s) => ({ width: `4ch` })
    },
    text: (el, s) => `${findOut(el, s, 'value', 50)}px`
  },
  range: {
    proto: RangeSlider,
    attr: {
      value: (el, s) => findOut(el, s, 'value', 50),
      min: (el, s) => findOut(el, s, 'min', 0),
      max: (el, s) => findOut(el, s, 'max', 100)
    },
    on: {
      input: (ev, el, s) => el.parent.props.input(ev, el, s)
    }
  },
  plusButton: {
    proto: SquareButton,
    props: ({ parent }) => ({
      icon: parent.props.plusIcon
    }),
    on: {
      click: (ev, el, s) => el.parent.props.plusClick(ev, el, s)
    }
  }
}
