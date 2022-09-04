'use strict'

import { DOCUMENT, FONT_FAMILY, THEME, TYPOGRAPHY } from '../config'
import { getDefaultOrFirstKey, merge } from '../utils'

export const applyDocument = () => merge(DOCUMENT, {
  theme: THEME.document,
  fontFamily: getDefaultOrFirstKey(FONT_FAMILY),
  fontSize: TYPOGRAPHY.base,
  lineHeight: TYPOGRAPHY.lineHeight
})
