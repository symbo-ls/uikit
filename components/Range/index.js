'use strict'

import { isFunction } from '@domql/utils'
import { opacify } from '@symbo.ls/scratch'
import { SquareButton } from '@symbo.ls/button'

const props = {
  appearance: 'none',
  width: '100%',
  height: '2px',
  outline: 'none',
  flex: 1,

  style: {
    appearance: 'none'
  },

  '::-webkit-slider-thumb': {
    boxSizing: 'content-box',
    width: '8px',
    height: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '100%',
    opacity: '.8',

    style: {
      appearance: 'none'
    }
  },

  '::-webkit-slider-runnable-track': {
  },

  '@dark': {
    background: 'white 0.2',

    '::-webkit-slider-thumb': {
      background: '#232526',
      borderColor: opacify('#454646', 0.75)
    },

    ':hover': {
      '::-webkit-slider-thumb': {
        borderColor: opacify('#fff', 0.35)
      }
    },

    ':focus': {
      '::-webkit-slider-thumb': {
        borderColor: '#3C6AC0'
      }
    }
  },

  '@light': {
    background: 'gray9',

    '::-webkit-slider-thumb': {
      background: 'white',
      borderColor: 'gray9'
    },

    ':hover': {
      '::-webkit-slider-thumb': {
        borderColor: 'gray7'
      }
    },

    ':focus': {
      '::-webkit-slider-thumb': {
        borderColor: 'blue'
      }
    }
  }
}

export const Range = {
  props,

  tag: 'input',
  attr: { type: 'range' }
}

const listenProp = (el, prop, def) => {
  const val = el.props && el.props[prop]
  const r = (isFunction(val) ? val(el, el.state) : val !== undefined ? val : def !== undefined ? def : 50)
  return r + ''
}

export const RangeWithButtons = {
  minus: {
    extend: SquareButton,
    props: { theme: 'tertiary', icon: 'minus' },
    on: {
      click: (ev, el, s) => {
        el.props && isFunction(el.props.onClick) && el.props.onClick(ev, el, s)
      }
    }
  },
  value: {
    style: { width: '4ch' },
    tag: 'span',
    text: (el, s) => {
      const unit = listenProp(el.parent.input, 'unit', '')
      return '' + (s.value || 50) + unit
    }
  },
  input: {
    extend: Range,
    attr: {
      value: (el, s) => parseFloat(s.value),
      min: (el, s) => listenProp(el, 'min', 0),
      max: (el, s) => listenProp(el, 'max', 100),
      step: (el, s) => listenProp(el, 'step', 1)
    },
    on: {
      input: (ev, el, s) => el.props && isFunction(el.props.onInput) && el.props.onInput(ev, el, s),
      change: (ev, el, s) => el.props && isFunction(el.props.onChange) && el.props.onChange(ev, el, s)
    }
  },
  plus: {
    extend: SquareButton,
    props: { theme: 'tertiary', icon: 'plus' },
    on: {
      click: (ev, el, s) => {
        el.props && isFunction(el.props.onClick) && el.props.onClick(ev, el, s)
      }
    }
  }
}
