'use strict'

import { FONT_FAMILY, THEME, TYPOGRAPHY } from '.'
import { merge } from '../utils'

export const DOCUMENT = {}

export const applyDocument = () => merge(DOCUMENT, {
  theme: THEME.document,
  fontFamily: FONT_FAMILY[Object.keys(FONT_FAMILY)[0]],
  fontSize: TYPOGRAPHY.base,
  lineHeight: TYPOGRAPHY.styles.lineHeight
})
