'use strict'

import { IconText } from '@symbo.ls/icon-text'

import { styleRow, styleRowActive, styleDropDown } from './style'

export const DropdownList = {
  style: styleDropDown,
  tag: 'ul',

  extends: Shape,

  state: {
    active: 0
  },

  childExtends: {
    tag: 'li',

    style: styleRow,
    props: (el, s) => ({
      depth: 0,
      round: 0
      // theme: el.parent.props.rowTheme
    }),

    span: {
      extends: [IconText],
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
