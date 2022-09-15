'use strict'

import { isArray, isObject } from '@domql/utils'
import { getSpacingByKey, getMediaTheme, getColor, getMediaColor } from '@symbo.ls/scratch'

import { depth } from './Shape/style'

const isBorderStyle = str =>
  ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial'].some(v => str.includes(v))

const transformBorder = (border, key = 'border') => {
  const obj = {}
  const arr = isObject(border) ? Object.values(border) : isArray(border) ? border : border.split(', ')
  arr.map(v => {
    if (v.slice(-2) === 'px' || v.slice(-2) === 'em') obj[`${key}Width`] = v // TODO: add map spacing
    else if (isBorderStyle(v)) obj[`${key}Style`] = v || 'solid'
    else if (getColor(v)) obj[`${key}Color`] = getColor(v)
  })
  return obj
}

const transformTextStroke = stroke => ({
  WebkitTextStroke: stroke.split(', ').map(v => {
    if (v.includes('px')) return v
    else if (getColor(v)) return getColor(v)
  }).join(' ')
})

const transformShadow = shadow => ({
  boxShadow: shadow.split(', ').map(v => {
    if (v !== getColor(v)) return getColor(v)
    if (v.includes('px')) return v

    const arr = v.split(' ')
    if (!arr.length) return v
    return arr.map(v => getSpacingByKey(v, 'shadow').shadow).join(' ')
  }).join(' ')
})

const transformBackgroundImage = (backgroundImage, ctx) => ({
  backgroundImage: backgroundImage.split(', ').map(v => {
    if (v.includes('url') || v.includes('gradient')) return v
    else if (ctx.SYSTEM.GRADIENT[backgroundImage]) {
      return getMediaColor(backgroundImage, 'backgroundImage')
    }
    return `url(${v})`
  }).join(' ')
})

export const Theme = {
  class: {
    depth: ({ props }) => depth[props.depth],

    theme: ({ props, key }) => {
      if (!props.theme) return
      return getMediaTheme(props.theme, props.themeModifier)
    },

    color: ({ props }) => (props.color) && getMediaColor(props.color, 'color'),
    background: ({ props }) => (props.background) && getMediaColor(props.background, 'background'),
    backgroundColor: ({ props }) => (props.backgroundColor) && getMediaColor(props.backgroundColor, 'backgroundColor'),
    backgroundImage: ({ props, context }) => (props.backgroundImage) && transformBackgroundImage(props.backgroundImage, context),
    backgroundSize: ({ props }) => props.backgroundSize ? ({ backgroundSize: props.backgroundSize }) : null,
    backgroundPosition: ({ props }) => props.backgroundPosition ? ({ backgroundPosition: props.backgroundPosition }) : null,

    textStroke: ({ props }) => props.textStroke ? transformTextStroke(props.textStroke) : null,

    border: ({ props }) => props.border ? transformBorder(props.border) : null,
    borderColor: ({ props }) => (props.borderColor) && getMediaColor(props.borderColor, 'borderColor'),
    borderStyle: ({ props }) => props.borderStyle && ({ borderStyle: props.borderStyle }),

    borderLeft: ({ props }) => props.borderLeft ? transformBorder(props.borderLeft, 'borderLeft') : null,
    borderTop: ({ props }) => props.borderTop ? transformBorder(props.borderTop, 'borderTop') : null,
    borderRight: ({ props }) => props.borderRight ? transformBorder(props.borderRight, 'borderRight') : null,
    borderBottom: ({ props }) => props.borderBottom ? transformBorder(props.borderBottom, 'borderBottom') : null,

    boxShadow: ({ props }) => props.boxShadow ? transformShadow(props.boxShadow) : null,

    opacity: ({ props }) => props.opacity && ({ opacity: props.opacity }),
    visibility: ({ props }) => props.visibility && ({ visibility: props.visibility })
  }
}
