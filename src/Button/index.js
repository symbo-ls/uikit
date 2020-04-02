'use strict'

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
  }
}

export default Button
