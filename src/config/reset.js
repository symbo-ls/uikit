'use strict'

import { TYPOGRAPHY, DOCUMENT, UNIT, FONT_FAMILY } from '.'
import { getFontFamily } from '../utils'

console.log(FONT_FAMILY, getFontFamily(FONT_FAMILY))

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

    fontFamily: FONT_FAMILY[FONT_FAMILY.default],

    fontSize: TYPOGRAPHY.default / DOCUMENT.fontSize + UNIT.default,
    lineHeight: DOCUMENT.lineHeight,
    color: DOCUMENT.theme.color,
    background: DOCUMENT.theme.background
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
