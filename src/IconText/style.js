'use strict'

import { Spacing, Unit } from '@rackai/scratch'

export const size = {
  default: {
    height: 'auto',
    padding: `auto`,
    lineHeight: `auto`,
    gap: '.35em'
  },
  1: {
    height: `${Math.pow(Spacing.ratio, 2)}em`,
    padding: `0 ${Spacing.ratio}em`,
    lineHeight: `${Spacing.base}${Unit}`
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
