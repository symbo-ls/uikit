'use strict'
import { Shape, IconText } from '..'
import { styleRow, styleRowActive, styleDropDown, styleSelectDropdown } from './style'

export const dropDown = {
  style: styleDropDown,
  tag: 'ul',
  proto: Shape,

  state: {
    active: 0
  },

  childProto: {
    tag: 'li',
    proto: [Shape],
    depth: 0,
    round: 0,
    span: {
      proto: [IconText],
      text: '',
      icon: 'checkMedium'
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
