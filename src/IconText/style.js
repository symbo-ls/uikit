'use strict'

import { SPACING, UNIT } from '@rackai/scratch'

export const size = {
  default: {
    height: 'auto',
    padding: `auto`,
    lineHeight: `auto`,
    gap: '.35em'
  },
  1: {
    height: `${Math.pow(SPACING.ratio, 2)}em`,
    padding: `0 ${SPACING.ratio}em`,
    lineHeight: `${SPACING.base}${UNIT}`
  }
}

export default {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  lineHeight: 1,

  '> svg': {
    // marginInlineEnd: `${0.35}em`
  }
}
