'use strict'

import './config'
import DOM from 'domql'
import styles from './styles'

import colors from './colors'
import buttons from './buttons'
import shapes from './shapes'
import icons from './icons'
import iconText from './icons/iconText'

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
    colors
  },
  shapes: {
    h1: 'Shapes',
    shapes
  },
  icons: {
    h1: 'Icons',
    icons,
    iconText
  },
  buttons: {
    h1: 'Buttons',
    buttons
  }
})
