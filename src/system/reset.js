'use strict'

import { getActiveConfig } from '../factory'
import { getMediaTheme } from '.'
import { deepMerge, merge } from '@domql/utils' // eslint-disable-line no-unused-vars

export const applyReset = (reset = {}) => {
  const CONFIG = getActiveConfig()
  const { CSS_VARS, RESET, TYPOGRAPHY, DOCUMENT } = CONFIG
  if (RESET) {
    if (RESET[':root']) {
      const configReset = RESET
      const configStyles = TYPOGRAPHY.styles

      configReset.body = {
        ...getMediaTheme('document', `@${CONFIG.globalTheme}`),
        ...configStyles.body
      }
      configReset.h1 = configStyles.h1
      configReset.h2 = configStyles.h2
      configReset.h3 = configStyles.h3
      configReset.h4 = configStyles.h4
      configReset.h5 = configStyles.h5
      configReset.h6 = configStyles.h6
    }

    const { body, ...styles } = TYPOGRAPHY.styles

    return deepMerge(merge(RESET, reset), {
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

        fontSize: TYPOGRAPHY.browserDefault + 'px',

        fontFamily: DOCUMENT.fontFamily,
        lineHeight: DOCUMENT.lineHeight
      },

      body: {
        boxSizing: 'border-box',
        height: '100%',
        margin: 0,
        fontFamily: DOCUMENT.fontFamily,

        fontSize: TYPOGRAPHY.base / TYPOGRAPHY.browserDefault + CONFIG.UNIT.default,

        ...getMediaTheme('document', `@${CONFIG.globalTheme}`),

        ...styles,
        ...body
      },

      // form elements
      fieldset: {
        border: 0,
        padding: 0,
        margin: 0
      },

      'select, input': {
        fontFamily: DOCUMENT.fontFamily
      }
    })
  }
}
