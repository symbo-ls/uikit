'use strict'

import { Icon } from '../../src'

export default {
  style: {
    margin: '1rem -16px !important'
  },
  class: {},
  childProto: {
    proto: Icon,

    props: (el, s) => ({
      icon: el.key
    }),

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
