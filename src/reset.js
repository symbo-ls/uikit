'use strict'

import { TYPOGRAPHY, DOCUMENT, UNIT } from './config'

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

    fontFamily: DOCUMENT.fontFamily,

    fontSize: TYPOGRAPHY.default / DOCUMENT.fontSize + UNIT.default,
    lineHeight: DOCUMENT.lineHeight
  },
  body: {
    boxSizing: 'border-box',
    height: '100%'
  },

  ...TYPOGRAPHY.styles,

  // form elements
  fieldset: {
    border: 0,
    padding: 0,
    margin: 0
  }
}
