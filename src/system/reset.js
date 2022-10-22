'use strict'

import * as CONFIG from '../defaultConfig'
import { CSS_VARS } from '../factory'
import { getMediaTheme } from '.'
import { deepMerge, merge, overwriteDeep } from '@domql/utils' // eslint-disable-line no-unused-vars

export const applyReset = (reset = {}) => {
  if (CONFIG.RESET) {
    // if (CONFIG.RESET[':root']) {
    //   overwriteDeep(CONFIG.TYPOGRAPHY.styles, CONFIG.RESET)
    //   console.log(CONFIG.RESET)
    //   CONFIG.RESET[':root'] = CSS_VARS
    // }
    if (CONFIG.RESET[':root']) {
      const configReset = CONFIG.RESET
      const configStyles = CONFIG.TYPOGRAPHY.styles
      configReset[':root'] = CSS_VARS
      configReset.body = {
        ...getMediaTheme('document', CONFIG.globalTheme),
        ...configStyles.body
      }
      configReset.h1 = configStyles.h1
      configReset.h2 = configStyles.h2
      configReset.h3 = configStyles.h3
      configReset.h4 = configStyles.h4
      configReset.h5 = configStyles.h5
      configReset.h6 = configStyles.h6
    }

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

      ...CONFIG.TYPOGRAPHY.styles,

      body: {
        boxSizing: 'border-box',
        height: '100%',
        margin: 0,
        fontFamily: CONFIG.DOCUMENT.fontFamily,

        fontSize: CONFIG.TYPOGRAPHY.base / CONFIG.TYPOGRAPHY.browserDefault + CONFIG.UNIT.default,

        ...getMediaTheme('document', CONFIG.globalTheme),

        ...CONFIG.TYPOGRAPHY.styles.body
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
}
