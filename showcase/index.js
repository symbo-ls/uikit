'use strict'

import './config'
import DOM from 'domql'
import styles from './styles'

import colors from './colors'
import buttons from './buttons'

// Symbols
import { Shape } from '../src'

DOM.create({
  class: styles,
  h4: {
    a: {
      text: 'symbols yo!',
      attr: { href: '/' }
    }
  },
  colors: {
    h1: 'Colors',
    container: colors
  },
  shapes: {
    h1: 'Shapes',
    container: {
      childProto: {
        proto: Shape,
        style: { width: 42, height: 42, padding: '0 !important' }
      },
      shape: {
        theme: 'secondary',
        depth: 16,
        shape: 'rounded',
        round: 6
      }
    }
  },
  buttons: {
    h1: 'Buttons',
    container: buttons
  }
})
