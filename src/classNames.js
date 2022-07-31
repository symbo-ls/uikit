'use strict'

import { isArray, isObject } from '@domql/utils'
import { getColor, mapSpacing, getTheme } from '@symbo.ls/scratch'

const isBorderStyle = str =>
  ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial'].some(v => str.includes(v))

const diffBorder = (border, key = 'border') => {
  const obj = {}
  const arr = isObject(border) ? Object.values(border) : isArray(border) ? border : border.split(', ')
  arr.map(v => {
    if (v.includes('px')) obj[`${key}Width`] = v // TODO: add map spacing
    else if (isBorderStyle(v)) obj[`${key}Style`] = v || 'solid'
    else if (getColor(v)) obj[`${key}Color`] = getColor(v)
  })
  return obj
}

const diffStroke = stroke => {
  const WebkitTextStroke = stroke.split(', ').map(v => {
    if (v.includes('px')) return v
    else if (getColor(v)) return getColor(v)
  }).join(' ')
  return { WebkitTextStroke }
}

export const classNames = {
  round: ({ props, key }) => props.round ? (mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })) : null,
  borderRadius: ({ props, key }) => props.borderRadius ? (mapSpacing(props.borderRadius, 'borderRadius') || ({ borderRadius: props.borderRadius })) : null,

  theme: ({ props }) => props.theme ? getTheme(props.theme) : null,

  color: ({ props }) => props.color ? ({ color: getColor(props.color) }) : null,
  background: ({ props }) => props.background ? ({ backgroundColor: getColor(props.background) }) : null,

  textStroke: ({ props }) => props.textStroke ? diffStroke(props.textStroke) : null,

  border: ({ props }) => props.border ? diffBorder(props.border) : null,
  borderColor: ({ props }) => props.borderColor ? ({ borderColor: getColor(props.borderColor) }) : null,
  borderStyle: ({ props }) => props.borderStyle && ({ borderStyle: props.borderStyle }),

  borderLeft: ({ props }) => props.borderLeft ? diffBorder(props.borderLeft, 'borderLeft') : null,
  borderTop: ({ props }) => props.borderTop ? diffBorder(props.borderTop, 'borderTop') : null,
  borderRight: ({ props }) => props.borderRight ? diffBorder(props.borderRight, 'borderRight') : null,
  borderBottom: ({ props }) => props.borderBottom ? diffBorder(props.borderBottom, 'borderBottom') : null,

  opacity: ({ props }) => props.opacity && ({ opacity: props.opacity }),
  visibility: ({ props }) => ({ visibility: props.visibility })
}
