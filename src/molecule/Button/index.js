'use strict'

// import { method, font, sizing } from 'scratch'
import { font, color, shape } from '../config'

import styles from './styles'

var Button = {
  tag: 'button',
  class: {
    default: styles,
    theme: element => element.theme,
    shape: element => element.shape,
    interactive: element => element.interactive
  },

  define: {
    theme: param => param || '',
    shape: param => param || '',
    interactive: param => (param || param === undefined) ? 'interactive' : ''
  },

  theme: color.schemeA,
  shape: shape.circular,
  interactive: true
}

export default Button
