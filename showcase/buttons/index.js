'use strict'

import { Shape, Button, IconText } from '../../src/'

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
    theme: 'primary',
    on: {
      click: (e, el) => el.update({ 
        theme: 'quo',
      }, true)
    }
  },
  button1: {
    theme: 'secondary',
    round: 26,
    _icon: {},
    text: 'avoes'
  },
  button2: {
    _icon: {},
    text: 'Avoe',
    shape: 'rectangle',
    theme: 'tertiary',
    round: 26
  }
}
