'use strict'

import { getActiveConfig } from '../factory'
import { getDefaultOrFirstKey, merge } from '../utils'

export const applyDocument = () => {
  const CONFIG = getActiveConfig()
  const { DOCUMENT, FONT_FAMILY, THEME, TYPOGRAPHY } = CONFIG
  return merge(DOCUMENT, {
    theme: THEME.document,
    fontFamily: getDefaultOrFirstKey(FONT_FAMILY),
    fontSize: TYPOGRAPHY.base,
    lineHeight: TYPOGRAPHY.lineHeight
  })
}
