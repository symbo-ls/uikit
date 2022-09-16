'use strict'
import { Shape, IconText } from '..'
import { styleRow, styleRowActive, styleDropDown } from './style'

export const DropdownList = {
  style: styleDropDown,
  tag: 'ul',

  extend: Shape,

  state: {
    active: 0
  },

  childExtend: {
    tag: 'li',
    extend: [Shape],

    style: styleRow,
    props: (el, s) => ({
      depth: 0,
      round: 0
    }),

    span: {
      extend: [IconText],
      props: {
        icon: 'checkmark',
        text: ''
      }
    },
    class: {
      active: (element, state) => (state.active === element.key) ? styleRowActive : {}
    },
    on: {
      click: (event, element, state) => {
        state.update({ active: element.key })
      }
    }
  }
}
