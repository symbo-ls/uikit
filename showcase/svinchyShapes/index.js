'use strict'

import { Shape } from '../../src'

export default {
  style: { display: 'flex' },
  class: {},
  childProto: {
    theme: 'primary',
    proto: Shape,
    style: { width: 42, height: 42, padding: 0, marginRight: 16 }
  },
  ...[{
    depth: 16,
    shape: 'rectangle',
    round: 2
  }, {
    depth: 16,
    shape: 'rectangle',
    round: 4
  }, {
    depth: 16,
    shape: 'rectangle',
    round: 6
  }, {
    depth: 16,
    shape: 'rectangle',
    round: 10
  }, {
    depth: 16,
    shape: 'rectangle',
    round: 16
  }, {
    depth: 16,
    shape: 'rounded',
    round: 26
  }]
}
