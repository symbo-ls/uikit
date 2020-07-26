'use strict'

var useSVGSymbol = file => `<use xlink:href="${file}" />`

// create icon
export default {
  tag: 'svg',
  define: { src: (param, element) => useSVGSymbol(param) },
  html: element => element.src || useSVGSymbol(element.key)
}
