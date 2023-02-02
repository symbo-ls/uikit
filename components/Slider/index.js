'use strict'

import style from './style'

import { set, opacify } from '@symbo.ls/scratch'
import { isFunction } from '@domql/utils'

import { SquareButton } from '@symbo.ls/button'

set({
  theme: {
    sliderThumb: {
      background: 'white 0.2',

      '&::-webkit-slider-thumb': {
        background: '#232526',
        borderColor: opacify('#454646', 0.75)
      },

      '&:hover': {
        '&::-webkit-slider-thumb': {
          borderColor: opacify('#fff', 0.35)
        }
      },

      '&:focus, &:active': {
        '&::-webkit-slider-thumb': {
          borderColor: '#3C6AC0'
        }
      }
    }
  }
})

export const RangeSlider = {
  style,
  props: {
    theme: 'sliderThumb'
  },

  tag: 'input',
  attr: { type: 'range' }
}

const listenProp = (el, prop, def) => {
  const val = el.props && el.props[prop]
  const r = (isFunction(val) ? val() : val) || (def !== undefined ? def : 50)
  // if (prop === 'value') console.log(r)
  return r
}

export const Slider = {
  button0: {
    extend: [SquareButton],
    props: {
      icon: 'minus'
    },
    on: {
      click: (ev, el, s) => {
        el.props && isFunction(el.props.click) && el.props.click(ev, el, s)
        const input = el.parent.input
        const props = input.props
        const value = isFunction(props.value) ? props.value() : props.value
        input.node.value = value
      }
    }
  },
  value: {
    style: { width: '4ch' },
    tag: 'span',
    text: (el, s) => {
      const value = listenProp(el.parent.input, 'value')
      const unit = listenProp(el.parent.input, 'unit', '')
      return '' + value + unit
    }
  },
  range: {
    extend: RangeSlider,
    attr: {
      value: (el, s) => listenProp(el, 'value', 50),
      min: (el, s) => listenProp(el, 'min', 0),
      max: (el, s) => listenProp(el, 'max', 100),
      step: (el, s) => listenProp(el, 'step', 1)
    },
    on: {
      input: (ev, el, s) => el.props && isFunction(el.props.input) && el.props.input(ev, el, s),
      change: (ev, el, s) => el.props && isFunction(el.props.change) && el.props.change(ev, el, s)
    }
  },
  button1: {
    extend: [SquareButton],
    props: {
      icon: 'plus'
    },
    on: {
      click: (ev, el, s) => {
        el.props && isFunction(el.props.click) && el.props.click(ev, el, s)
        const input = el.parent.input
        const props = input.props
        const value = isFunction(props.value) ? props.value() : props.value
        input.node.value = value
      }
    }
  }
}
