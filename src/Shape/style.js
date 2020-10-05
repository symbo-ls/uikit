'use strict'

import { Size, Unit } from 'scratch'

export default {
  border: `1px solid transparent`,
  boxSizing: 'border-box'
}

export const round = {
  0: { borderRadius: 0 },
  4: { borderRadius: 4 },
  6: { borderRadius: 6 },
  10: { borderRadius: 10 },
  16: { borderRadius: 16 },
  26: { borderRadius: 26 },
  42: { borderRadius: 42 }
}

export const depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${Unit} 4${Unit}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${Unit} 6${Unit}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${Unit} 10${Unit}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${Unit} 16${Unit}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${Unit} 26${Unit}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${Unit} 42${Unit}` }
}

export const shape = {
  rectangle: {},
  circle: { borderRadius: '100%' },
  bubble: {},
  tooltip: {}
}

export const size = {
  default: {
    height: `${Math.pow(Size.ratio, 2)}em`,
    padding: `0 ${Size.ratio}em`,
    fontSize: `${Size.base}${Unit}`,
    lineHeight: `${Size.base}${Unit}`
  }
}
