'use strict'

import { DOCUMENT, UNIT } from '.'

export const RESET = {
  html: {
    position: 'fixed',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    margin: '0',
    WebkitFontSmoothing: 'antialiased',

    fontSize: DOCUMENT.fontSize + UNIT.default,
    color: DOCUMENT.theme.color,
    background: DOCUMENT.theme.background
  },
  body: {
    boxSizing: 'border-box',
    height: '100%'
  }
}
