'use strict'

var useSVGSymbol = file => `<use xlink:href="${file}" />`

// create icon
export default {
  tag: 'svg',
  attr: {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  define: { src: param => param },
  html: ({ key, src }) => useSVGSymbol(src || key)
}
