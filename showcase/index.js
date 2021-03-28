'use strict'

import DOM from '@rackai/domql'
import style from './style'
import './config'
import './define'

import colors from './colors'
import buttons from './buttons'
import shapes from './shapes'
import svinchyShapes from './svinchyShapes'
import icons from './icons'
import iconText from './icons/iconText'
import banners from './banners'

DOM.create({
  style,

  h4: {
    a: {
      text: 'symbols yo!',
      attr: { href: '/' }
    }
  },
  banners: {
    banners
  },
  svinchyShapes: {
    h1: 'Svinchy Shapes',
    svinchyShapes
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
