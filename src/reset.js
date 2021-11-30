'use strict'

import * as CONFIG from './config'

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

    fontFamily: CONFIG.DOCUMENT.fontFamily,

    fontSize: CONFIG.TYPOGRAPHY.default / CONFIG.DOCUMENT.fontSize + CONFIG.UNIT.default,
    lineHeight: CONFIG.DOCUMENT.lineHeight
  },

  body: {
    boxSizing: 'border-box',
    height: '100%'
  },

  ...CONFIG.TYPOGRAPHY.styles,

  // form elements
  fieldset: {
    border: 0,
    padding: 0,
    margin: 0
  }
}
