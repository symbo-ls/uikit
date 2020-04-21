'use strict'

// import Scratch from 'scratch'
// import { theme, size } from 'scratch'
import styles from './styles'

var Button = {
  tag: 'button',

  class: {
    default: styles,
    theme: element => element.theme,
    size: element => element.size,
    interactive: element => element.interactive
  },

  define: {
    theme: param => param || '',
    size: param => param || '',
    interactive: param => (param || param === undefined) ? 'interactive' : ''
  }
}

export default Button
