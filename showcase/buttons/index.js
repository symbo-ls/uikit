'use strict'

import { Button } from '../../src'

export default {
  childProto: {
    proto: Button,
    style: {
      marginRight: 26
    }
  },
  button0: {
    text: 'Avoe',
    theme: 'primary'
  },
  button1: {
    text: 'Avoe',
    theme: 'secondary',
    round: 26
  },
  button2: {
    text: 'Avoe',
    shape: 'rectangle',
    theme: 'tertiary',
    round: 0
  }
}
