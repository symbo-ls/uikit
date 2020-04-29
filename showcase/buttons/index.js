'use strict'

import { Button, IconText } from '../../src'

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
    theme: 'secondary',
    round: 26,
    icontext: {
      proto: IconText,
      icon: element => 'down',
      _icon: {},
      text: element => 'Download'
    }
  },
  button2: {
    text: 'Avoe',
    shape: 'rectangle',
    theme: 'tertiary',
    round: 26
  }
}
