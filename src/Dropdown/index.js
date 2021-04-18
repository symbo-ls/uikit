'use strict'
import { Shape, IconText } from '..'
import { styleRow, styleRowActive, styleDropDown } from './style'

export const dropDown = {
  style: styleDropDown,
  tag: 'ul',

  state: {
    active: 0
  },

  childProto: {
    tag: 'li',
    proto: [Shape, IconText],
    theme: 'lightBlue',
    icon: 'checkMedium',
    style: styleRow,
    class: {
      active: (element, state) => (state.active === element.key) ? styleRowActive : ''
    },
    on: {
      click: (event, element, state) => {
        state.update({ active: element.key })
      }
    }
  },

  ...[
    { text: 'Today' },
    { text: 'Yesterday' },
    { text: 'A week age' },
    { text: 'A month ago' }
  ]
}
