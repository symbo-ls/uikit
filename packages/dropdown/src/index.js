'use strict'

import { IconText } from '@symbo.ls/icon-text'
import { Shape } from '@symbo.ls/shape'
import { styleRow, styleRowActive, styleDropDown } from './style'

export const DropdownList = {
  style: styleDropDown,
  tag: 'ul',

  proto: Shape,

  state: {
    active: 0
  },

  childProto: {
    tag: 'li',
    proto: [Shape],

    style: styleRow,
    props: (el, s) => ({
      depth: 0,
      round: 0
      // theme: el.parent.props.rowTheme
    }),

    span: {
      proto: [IconText],
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
