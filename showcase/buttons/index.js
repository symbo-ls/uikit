'use strict'

import { Button } from '../../src'

export default {
  childProto: {
    style: {
      marginRight: 26
    }
  },
  button0: {
    proto: Button,
    text: 'Avoe',
    theme: 'primary'
  },
  button1: {
    proto: Button,
    text: 'Avoe',
    theme: 'secondary',
    round: 26
  },
  button2: {
    proto: Button,
    text: 'Avoe',
    shape: 'rectangle',
    theme: 'tertiary',
    round: 0
  }
}
