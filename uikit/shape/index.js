'use strict'

import { mapSpacing, getTheme, getColor } from '@symbo.ls/scratch'

import style, { shape, depth } from './style'

const isBorderStyle = str =>
  ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial'].some(v => str.includes(v))

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
    shape: (element) => {
      const { props } = element
      const { shape } = props
      return shape ? exec(SHAPES[shape], element) : null
    },
    shapeDirection: ({ props }) => {
      const { shape, shapeDirection } = props
      if (!shape || !shapeDirection) return
      const shapeDir = SHAPES[shape + 'Direction']
      return shape ? shapeDir[shapeDirection || 'top'] : null
    },
    shapeDirectionColor: ({ props, ...el }) => props.shapeDirection ? { '&:before': { borderColor: el.class.backgroundColor } } : null
  }
}

export default Shape
