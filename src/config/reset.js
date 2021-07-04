'use strict'

import { Document, Typography, Unit } from '.'

export default {
  html: {
    position: 'fixed',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    margin: '0',
    WebkitFontSmoothing: 'antialiased',

    fontSize: Document.fontSize + Unit.default,
    color: Document.theme.color,
    background: Document.theme.background
  },
  body: {
    boxSizing: 'border-box',
    height: '100%'
  }
}
