'use strict'

export const XYZ = {
  class: {
    zIndex: ({ props }) => props.zIndex && ({ zIndex: props.zIndex })
  }
}
