'use strict'

import { IconText } from '../../src'

export default {
  style: {
    margin: '1rem -16px !important'
  },
  class: {},
  childProto: {
    proto: IconText,
    style: {
      margin: 16,
      color: 'black'
    },
    icon: element => element.key,
    _icon: {},
    text: element => element.key
  },
  left: {},
  right: {},
  up: {},
  down: {}
}
