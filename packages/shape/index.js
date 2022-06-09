'use strict'

import { mapSpacing, getTheme, getColor } from '@symbo.ls/scratch'

import style, { shape, depth } from './style'

const isBorderStyle = str =>
  ['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset','initial'].some(v => str.includes(v))

const diffBorder = (border, key = 'border') => {
  const obj = {}
  const arr = border.split(' ')
  arr.map(v => {
    if (v.includes('px')) obj[`${key}Width`] = v
    else if (isBorderStyle(v)) obj[`${key}Style`] = v || 'solid'
    else if (getColor(v)) obj[`${key}Color`] = getColor(v)
  })
  return obj
}

export const Shape = {
  class: {
    default: style,
    shape: ({ props }) => props.shape ? shape[props.shape] : null,
    shapeDirection: ({ props }) => props.shape ? shape[props.shape][props.shapeDirection || 'top'] : null,
    shapeDirectionColor: ({ props, ...el }) => props.shapeDirection ? { '&:before': { borderColor: el.class.backgroundColor } } : null,
    depth: ({ props }) => depth[props.depth],
    round: ({ props, key, ...el }) => props.round ? (mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })) : null,
    theme: ({ props }) => props.theme ? getTheme(props.theme) : null,
    color: ({ props }) => props.color ? ({ color: getColor(props.color) }) : null,
    background: ({ props }) => props.background ? ({ backgroundColor: getColor(props.background) }) : null,
    // border: ({ props }) => props.border ? ({ borderColor: getColor(props.border) }) : null,

    border: ({ props }) => props.border ? diffBorder(props.border) : null,
    borderLeft: ({ props }) => props.borderLeft ? diffBorder(props.borderLeft, 'borderLeft') : null,
    borderTop: ({ props }) => props.borderTop ? diffBorder(props.borderTop, 'borderTop') : null,
    borderRight: ({ props }) => props.borderRight ? diffBorder(props.borderRight, 'borderRight') : null,
    borderBottom: ({ props }) => props.borderBottom ? diffBorder(props.borderBottom, 'borderBottom') : null,

    opacity: ({ props }) => props.opacity && ({ opacity: props.opacity }),
    visibility: ({ props }) => props.visibility && ({ visibility: props.visibility })
  }

  // mode: {
  //   dark: {
  //     theme: 'white'
  //   }
  // }

  // theme: {
  //   default: 'primary',
  //   dark: 'whiteish'
  // }

  // size: {
  //   default: 'auto',
  //   mobile: 'fit'
  // }

  // padding: {
  //   default: ratio.phi,
  //   mobile: ratio.perfect
  // }
}

export default Shape
