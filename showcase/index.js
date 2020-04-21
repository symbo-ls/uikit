'use strict'

import DOM from 'domql'
import styles from './styles'

// Symbols
import { Button } from '../src'

DOM.create({
  class: styles,
  h4: {
    a: {
      text: 'Scratch yo!',
      attr: { href: '/' }
    }
  },
  colors: {
    h1: 'Colors',
    container: { }
  },
  shapes: {
    h1: 'Shapes',
    container: { }
  },
  buttons: {
    h1: 'Buttons',
    container: {
      button0: {
        proto: Button,
        text: 'Avoe',
        theme: 'primary'
      }
    }
  }
})
