'use strict'

import { FONT_FAMILY, THEME, TYPOGRAPHY } from '.'
import { getDefaultOrFirstKey, merge } from '../utils'

export const DOCUMENT = {}

export const applyDocument = () => merge(DOCUMENT, {
  theme: THEME.document,
  fontFamily: getDefaultOrFirstKey(FONT_FAMILY),
  fontSize: TYPOGRAPHY.base,
  lineHeight: TYPOGRAPHY.styles.lineHeight
})
