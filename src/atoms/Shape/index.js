'use strict'

import { exec, isString } from '@domql/utils'
import { SHAPES } from './style'
import { getSpacingBasedOnRatio, getMediaColor } from '@symbo.ls/scratch'
import { Pseudo } from '../Pseudo'

const transformBorderRadius = (radius, props, propertyName) => {
  if (!isString(radius)) return
  return {
    borderRadius: radius.split(' ').map((v, k) => getSpacingBasedOnRatio(props, propertyName, v)[propertyName]).join(' ')
  }
}

export const Shape = {
  extend: Pseudo,

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
      return shape && shapeDir ? shapeDir[shapeDirection || 'left'] : null
    },
    shapeDirectionColor: el => {
      const { props } = el
      const { background, backgroundColor } = props
      const borderColor = getMediaColor(background || backgroundColor, 'borderColor')
      return props.shapeDirection ? borderColor : null
    },

    round: ({ props, key, ...el }) => transformBorderRadius(props.round || props.borderRadius, props, 'round'),
    borderRadius: ({ props, key, ...el }) => transformBorderRadius(props.borderRadius || props.round, props, 'borderRadius')
  }
}

export default Shape
