'use strict'

import { Icon } from '../../src'

export default {
  style: {
    margin: '1rem -16px !important'
  },
  class: {},
  childProto: {
    proto: Icon,
    name: element => element.key,
    style: {
      margin: 16,
      color: 'black'
    }
  },
  arrowMediumLeft: {},
  arrowMediumRight: {},
  arrowMediumUp: {},
  arrowMediumDown: {}
}
