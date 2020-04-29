'use strict'

import sprite from './svg'
import style from './style'

var useSVGSymbol = (name) => `<use xlink:href="${sprite[name]}" />`

// create icon
var Icon = {
  tag: 'svg',
  style,
  class: {},
  define: { name: (param, element) => useSVGSymbol(param) },
  attr: { viewBox: '0 0 16 16' },
  html: element => element.name || useSVGSymbol(element.key)
}

export default Icon
