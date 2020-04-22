'use strict'

import { size as sizing } from 'scratch'

var style = {
  border: `1px solid transparent`,
  boxSizing: 'border-box'
}

var round = {
  4: { borderRadius: 4 },
  6: { borderRadius: 6 },
  10: { borderRadius: 10 },
  16: { borderRadius: 16 },
  26: { borderRadius: 26 },
  42: { borderRadius: 42 }
}

var depth = {
  4: { boxShadow: 'rgba(0,0,0,.10) 0 2px 4px' },
  6: { boxShadow: 'rgba(0,0,0,.10) 0 3px 6px' },
  10: { boxShadow: 'rgba(0,0,0,.10) 0 4px 10px' },
  16: { boxShadow: 'rgba(0,0,0,.10) 0 8px 16px' },
  26: { boxShadow: 'rgba(0,0,0,.10) 0 14px 26px' },
  42: { boxShadow: 'rgba(0,0,0,.10) 0 20px 42px' }
}

var shape = {
  rectangle: {},
  rounded: {},
  circle: { borderRadius: '100%' },
  bubble: {},
  tooltip: {}
}

var size = {
  default: {
    height: `${Math.pow(sizing.ratio, 2)}em`,
    padding: `0 ${sizing.ratio}em`,
    fontSize: `${sizing.base}px`,
    lineHeight: `${sizing.base}px`
  }
}

export { style, shape, round, depth, size }
