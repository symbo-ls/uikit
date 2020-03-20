'use strict'

// import { method, font, sizing } from 'scratch'
import { theme, box } from 'scratch'

import styles from './styles'

var Button = {
  tag: 'button',

  class: {
    default: styles,
    theme: element => element.theme,
    box: element => element.box,
    interactive: element => element.interactive
  },

  define: {
    theme: param => param || '',
    box: param => param || '',
    interactive: param => (param || param === undefined) ? 'interactive' : ''
  },

  theme: theme.schemeA,
  box: box.circular,
  interactive: true
}

export default Button
