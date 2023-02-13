'use strict'

import { init } from '@symbo.ls/init'
const useSVGSymbol = file => `<use xlink:href="${file}" />`

// create SVG symbol
export const Svg = {
  tag: 'svg',
  props: {
    style: { '*': { fill: 'currentColor' } }
  },
  attr: {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  html: ({ key, props, context, ...el }) => {
    const SVG = context.system && context.system.SVG
    const useSvgSprite = props.spriteId || (context.system && context.system.useSvgSprite)

    if (!useSvgSprite) return props.src
    
    let spriteId = props.spriteId
    if (spriteId) return `<use xlink:href="#${spriteId}" />`
    
    const symbolId = Symbol.for(props.src)
    let SVGKey = SVG[symbolId]
    if (SVGKey && SVG[SVGKey]) return `<use xlink:href="#${SVGKey}" />`
    
    SVGKey = SVG[symbolId] = Math.random()
    const conf = init({ 
      svg: { [SVGKey]: props.src } 
    }, null, {
      document: context.document,
      emotion: context.emotion
    })
    
    return `<use xlink:href="#${SVGKey}" />`
  }
}
