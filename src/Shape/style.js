'use strict'

import { size as sizing, unit } from 'scratch'

var style = {
  border: `1px solid transparent`,
  boxSizing: 'border-box'
}

var round = {
  0: { borderRadius: 0 },
  4: { borderRadius: 4 },
  6: { borderRadius: 6 },
  10: { borderRadius: 10 },
  16: { borderRadius: 16 },
  26: { borderRadius: 26 },
  42: { borderRadius: 42 }
}

var depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${unit} 4${unit}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${unit} 6${unit}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${unit} 10${unit}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${unit} 16${unit}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${unit} 26${unit}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${unit} 42${unit}` }
}

var shape = {
  rectangle: {},
  circle: { borderRadius: '100%' },
  bubble: {},
  tooltip: {}
}

var size = {
  default: {
    height: `${Math.pow(sizing.ratio, 2)}em`,
    padding: `0 ${sizing.ratio}em`,
    fontSize: `${sizing.base}${unit}`,
    lineHeight: `${sizing.base}${unit}`
  }
}

export { style, shape, round, depth, size }
