'use strict'

import { getSpacingByKey, getMediaTheme, getColor, getMediaColor } from '@symbo.ls/scratch'

import { depth } from './Shape/style'

const isBorderStyle = str =>
  ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial'].some(v => str.includes(v))

const transformBorder = border => {
  const arr = border.split(', ')
  return arr.map(v => {
    v = v.trim()
    if (v.slice(0, 2) === '--') return `var(${v})`
    else if (isBorderStyle(v)) return v || 'solid'
    else if (v.slice(-2) === 'px' || v.slice(-2) === 'em') return v // TODO: add map spacing
    else if (getColor(v).length > 2) return getColor(v)
    return getSpacingByKey(v, 'border').border
  }).join(' ')
}

const transformTextStroke = stroke => ({
  WebkitTextStroke: stroke.split(', ').map(v => {
    if (v.slice(0, 2) === '--') return `var(${v})`
    if (v.includes('px')) return v
    else if (getColor(v)) return getColor(v)
  }).join(' ')
})

export const transformShadow = shadows => shadows.split('|').map(shadow => {
  return shadow.split(', ').map(v => {
    v = v.trim()
    if (v.slice(0, 2) === '--') return `var(${v})`
    if (getColor(v).length > 2) return getColor(v)
    if (v.includes('px') || v.slice(-2) === 'em') return v
    const arr = v.split(' ')
    if (!arr.length) return v
    return arr.map(v => getSpacingByKey(v, 'shadow').shadow).join(' ')
  }).join(' ')
}).join(',')

const transformBackgroundImage = (backgroundImage, ctx, globalTheme) => ({
  backgroundImage: backgroundImage.split(', ').map(v => {
    if (v.slice(0, 2) === '--') return `var(${v})`
    if (v.includes('url') || v.includes('gradient')) return v
    else if (ctx.system.GRADIENT[backgroundImage]) {
      return getMediaColor(backgroundImage, 'backgroundImage', globalTheme)
    }
    return `url(${v})`
  }).join(' ')
})

export const getSystemTheme = (element, state) => {
  const { context } = element
  const rootState = element.__root ? element.__root.state : element.state
  return rootState.globalTheme || context.system.globalTheme
}

export const Theme = {
  class: {
    depth: ({ props }) => depth[props.depth],

    theme: (element) => {
      const { props } = element
      const globalTheme = getSystemTheme(element)
      if (!props.theme) return
      return getMediaTheme(props.theme, `@${props.themeModifier || globalTheme}`)
    },

    color: (element) => {
      const { props } = element
      const globalTheme = getSystemTheme(element)
      if (!props.color) return
      return getMediaColor(props.color, 'color', globalTheme)
    },

    background: (element) => {
      const { props } = element
      const globalTheme = getSystemTheme(element)
      if (!props.background) return
      return getMediaColor(props.background, 'background', globalTheme)
    },

    backgroundColor: (element) => {
      const { props } = element
      const globalTheme = getSystemTheme(element)
      if (!props.backgroundColor) return
      return getMediaColor(props.backgroundColor, 'backgroundColor', globalTheme)
    },

    backgroundImage: (element) => {
      const { props, context } = element
      const globalTheme = getSystemTheme(element)
      if (!props.backgroundImage) return
      return transformBackgroundImage(props.backgroundImage, context, globalTheme)
    },
    backgroundSize: ({ props }) => props.backgroundSize ? ({ backgroundSize: props.backgroundSize }) : null,
    backgroundPosition: ({ props }) => props.backgroundPosition ? ({ backgroundPosition: props.backgroundPosition }) : null,

    textStroke: ({ props }) => props.textStroke ? transformTextStroke(props.textStroke) : null,

    outline: ({ props }) => props.outline && ({
      outline: transformBorder(props.outline)
    }),

    border: ({ props }) => props.border && ({
      border: transformBorder(props.border)
    }),
    borderColor: ({ props }) => (props.borderColor) && getMediaColor(props.borderColor, 'borderColor'),
    borderStyle: ({ props }) => props.borderStyle && ({ borderStyle: props.borderStyle }),

    borderLeft: ({ props }) => props.borderLeft && ({
      borderLeft: transformBorder(props.borderLeft)
    }),
    borderTop: ({ props }) => props.borderTop && ({
      borderTop: transformBorder(props.borderTop)
    }),
    borderRight: ({ props }) => props.borderRight && ({
      borderRight: transformBorder(props.borderRight)
    }),
    borderBottom: ({ props }) => props.borderBottom && ({
      borderBottom: transformBorder(props.borderBottom)
    }),

    boxShadow: ({ props }) => props.boxShadow && ({
      boxShadow: transformShadow(props.boxShadow)
    }),

    textShadow: ({ props }) => props.textShadow && ({
      textShadow: transformShadow(props.textShadow)
    }),

    opacity: ({ props }) => props.opacity && ({ opacity: props.opacity }),
    visibility: ({ props }) => props.visibility && ({ visibility: props.visibility })
  }
}
