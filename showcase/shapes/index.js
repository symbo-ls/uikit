'use strict'

import { Shape } from '../../src'

export default {
  style: { display: 'flex' },
  class: {},
  childProto: {
    proto: Shape,
    props: {
      theme: 'primary'
    },
    style: { width: 42, height: 42, padding: 0, marginRight: 16 }
  },
  ...[{
    props: {
      depth: 16,
      shape: 'rectangle',
      round: 2
    }
  }, {
    props: {
      depth: 16,
      shape: 'rectangle',
      round: 4
    }
  }, {
    props: {
      depth: 16,
      shape: 'rectangle',
      round: 6
    }
  }, {
    props: {
      depth: 16,
      shape: 'rectangle',
      round: 10
    }
  }, {
    props: {
      depth: 16,
      shape: 'rectangle',
      round: 16
    }
  }, {
    props: {
      depth: 16,
      shape: 'rounded',
      round: 26
    }
  }]
}
