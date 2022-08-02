'use strict'

import * as CONFIG from './config'
import { getTheme } from './system'
import { deepMerge, merge } from './utils'

export const applyReset = (reset = {}) => {
  return deepMerge(merge(CONFIG.RESET, reset), {
    html: {
      position: 'absolute',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      margin: '0',
      WebkitFontSmoothing: 'antialiased',
      transform: 'translate3d(0, 0, 1px)',
      scrollBehavior: 'smooth',

      fontFamily: CONFIG.DOCUMENT.fontFamily,
      fontSize: CONFIG.DOCUMENT.fontSize / CONFIG.TYPOGRAPHY.default + CONFIG.UNIT.default,
      lineHeight: CONFIG.DOCUMENT.lineHeight
    },

    body: {
      boxSizing: 'border-box',
      height: '100%',
      margin: 0,
      fontFamily: CONFIG.DOCUMENT.fontFamily,

      ...getTheme('document')
    },

    ...CONFIG.TYPOGRAPHY.styles,

    // form elements
    fieldset: {
      border: 0,
      padding: 0,
      margin: 0
    },

    'select, input': {
      fontFamily: CONFIG.DOCUMENT.fontFamily
    }
  })
}
