'use strict'

import { DOCUMENT, UNIT } from '.'
import { findHeadings } from '../utils'

var HEADINGS = findHeadings()
console.log(HEADINGS)
const headingsObj = {}
for (const k in HEADINGS) {
  headingsObj[`h${parseInt(k) + 1}`] = {
    fontSize: `${HEADINGS[k].scaling}em`
  }
}

console.log(headingsObj)

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
  },
  ...headingsObj
}
