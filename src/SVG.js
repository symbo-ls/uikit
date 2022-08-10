'use strict'

const useSVGSymbol = file => `<use xlink:href="${file}" />`

// create SVG symbol
export const SVG = {
  tag: 'svg',
  props: {
    style: { '*': { fill: 'currentColor' } }
  },
  attr: {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  html: ({ key, props }) => useSVGSymbol(props.src)
}
