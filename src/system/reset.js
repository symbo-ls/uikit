'use strict'

import * as CONFIG from '../defaultConfig'
import { CSS_VARS } from '../factory'
import { getTheme } from '.'
import { deepMerge, merge } from '../utils'

export const applyReset = (reset = {}) => {
  return deepMerge(merge(CONFIG.RESET, reset), {
    ':root': CSS_VARS,

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

      fontSize: CONFIG.TYPOGRAPHY.browserDefault + 'px',

      fontFamily: CONFIG.DOCUMENT.fontFamily,
      lineHeight: CONFIG.DOCUMENT.lineHeight
    },

    body: {
      boxSizing: 'border-box',
      height: '100%',
      margin: 0,
      fontFamily: CONFIG.DOCUMENT.fontFamily,

      ...getTheme('document'),

      fontSize: CONFIG.TYPOGRAPHY.base / CONFIG.TYPOGRAPHY.browserDefault + CONFIG.UNIT.default,

      ...CONFIG.TYPOGRAPHY.styles
    },

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
