'use strict'
import { Shape, IconText } from '..'
import { styleRow, styleRowActive, styleDropDown } from './style'

export const Dropdown = {
  style: styleDropDown,
  tag: 'ul',

  proto: Shape,

  state: {
    active: 0
  },

  childProto: {
    tag: 'li',
    proto: [Shape],
    props: (el, s) => ({
      depth: 0,
      round: 0,
      theme: el.props.rowTheme
    }),

    span: {
      proto: [IconText],
      props: {
        icon: 'checkMedium',
        text: ''
      }
    },
    style: styleRow,
    class: {
      active: (element, state) => (state.active === element.key) ? styleRowActive : 'round: 6'
    },
    on: {
      click: (event, element, state) => {
        state.update({ active: element.key })
      }
    }
  },

  ...[
    { span: { text: 'Today' } },
    { span: { text: 'Yesterday' } },
    { span: { text: 'A week age' } },
    { span: { text: 'A month ago' } }
  ]
}
