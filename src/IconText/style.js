'use strict'

import { Size, Unit } from '@rackai/scratch'

export const size = {
  default: {
    height: `${Math.pow(Size.ratio, 2)}em`,
    padding: `0 ${Size.ratio}em`,
    fontSize: `${Size.base}${Unit}`,
    lineHeight: `${Size.base}${Unit}`
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
