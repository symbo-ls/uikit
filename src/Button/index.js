'use strict'

import scratch from 'scratch'
import { css } from 'emotion'
import style from './styles'

var Button = {
  tag: 'button',
  style,

  class: {
    theme: element => css(scratch['theme'][element.theme]),
    size: element => css(scratch['size'][element.size]),
    shape: element => css(scratch['shape'][element.shape]),
    interactive: element => element.interactive
  },

  define: {
    theme: param => param || '',
    size: param => param || '',
    shape: param => param || '',
    interactive: param => (param || param === undefined) ? 'interactive' : ''
  }
}

export default Button
