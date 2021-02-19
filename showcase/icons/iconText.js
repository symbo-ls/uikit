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
      padding: 0,
      color: 'black'
    },
    icon: element => element.key,
    _icon: {},
    text: element => element.key
  },
  arrowMediumLeft: {},
  arrowMediumRight: {},
  arrowMediumUp: {},
  arrowMediumDown: {}
}
