'use strict'

import { Shape,  } from '../../src'

export default {
  style: { border: '1px solid red'  },
  tooltips: {
    style: { marginBottom: 42 },
    childProto: {
      proto: Shape,
      round: 10,
      style: {
        width: 100,
        height: 100,
      }
    },

    one: {}
  },

  text: '☆ make some noise'
}
