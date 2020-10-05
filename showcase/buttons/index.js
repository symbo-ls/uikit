'use strict'

import { Button, IconText } from '^'

export default {
  childProto: {
    proto: Button,
    style: {
      marginRight: 26
    }
  },
  button0: {
    _icon: {},
    text: 'Avoe',
    theme: 'primary'
  },
  button1: {
    theme: 'secondary',
    round: 26,
    _icon: {},
    text: 'avoes'
  },
  button2: {
    proto: Button,
    _icon: {},
    text: 'Avoe',
    shape: 'rectangle',
    theme: 'tertiary',
    round: 26
  }
}
