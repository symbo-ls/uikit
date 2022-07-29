'use strict'

import { exec } from '@domql/utils'
import { SHAPES } from './style'

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
