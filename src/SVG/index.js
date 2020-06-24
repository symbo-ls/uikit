'use strict'

var useSVGSymbol = file => `<use xlink:href="${file}" />`

// create icon
export default {
  tag: 'svg',
  define: { file: (param, element) => useSVGSymbol(param) },
  html: element => element.file || useSVGSymbol(element.key)
}
