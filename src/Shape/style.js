'use strict'

import { Unit } from '@rackai/scratch'

export default {
  boxSizing: 'border-box'
}

export const round = {
  0: { borderRadius: 0 },
  4: { borderRadius: 4 },
  6: { borderRadius: 6 },
  10: { borderRadius: 10 },
  12: { borderRadius: 12 },
  16: { borderRadius: 16 },
  26: { borderRadius: 26 },
  42: { borderRadius: 42 }
}

export const roundCornerTopLeft = {
  0: { borderTopLeftRadius: 0 },
  4: { borderTopLeftRadius: 4 },
  6: { borderTopLeftRadius: 6 },
  10: { borderTopLeftRadius: 10 },
  12: { borderTopLeftRadius: 12 },
  16: { borderTopLeftRadius: 16 },
  26: { borderTopLeftRadius: 26 },
  42: { borderTopLeftRadius: 42 }
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
  oval: { borderRadius: '100%' },
  bubble: {},
  tooltip: {}
}
