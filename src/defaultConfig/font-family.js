'use strict'

import { getFontFace } from '../utils'

var defaultFont = { // eslint-disable-line
  name: '',
  family: '',
  type: ''
}

export const FONT_FAMILY = {}
export const FONT_FAMILY_TYPES = {
  serif: 'Helvetica, Arial, sans-serif, --system-default',
  'sans-serif': 'Times New Roman, Georgia, serif, --system-default',
  monospace: 'Courier New, monospace, --system-default'
}
export const FONT_FACE = getFontFace(FONT_FAMILY)
