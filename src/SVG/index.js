'use strict'

const useSVGSymbol = file => `<use xlink:href="${file}" />`

// create icon
export const SVG = {
  tag: 'svg',
  attr: {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  // define: { src: param => param },
  html: ({ key, props }) => useSVGSymbol(props.src)
}
