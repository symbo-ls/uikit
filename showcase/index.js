'use strict'

import DOM from 'domql'
import { Button } from '../src'

DOM.create({
  button: {
    proto: Button,
    text: 'Avoe'
  }
})
