'use strict'

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

const findOut = (el, s, prop, def) => {
  const val = el.parent.parent.props[prop]
  return isFunction(val) ? val(el, s) : val || def
}

export const SelectTool = {
  proto: [Shape],

  props: {
    round: 'Z'
  },
  value: {
    tag: 'span',
    // class: { w: { minWidth: `4ch` } },
    text: (el, s) => `${findOut(el, s, 'value', 50)}${findOut(el, s, 'type') === 'fontSize' ? 'px' : ''}`
  },

  button: {
    proto: [SquareButton],
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
