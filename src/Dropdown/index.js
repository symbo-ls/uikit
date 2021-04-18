'use strict'
import { Shape, IconText } from '..'
import { styleDropDown, active } from './style'

export const dropDown = {
  style: styleDropDown,
  tag: 'ul',
  childProto: {
    tag: 'li',
    proto: [Shape, IconText],
    theme: 'lightBlue',
    icon: 'checkMedium',
    define: {
      value: param => param,
      active: param => param
    }
  },
  ...[
    { text: 'Today' },
    { text: 'Yesterday' },
    { text: 'A week age' },
    { text: 'A month ago' }
  ]
}
