'use strict'

export const Transform = {
  class: {
    transform: ({ props }) => props.transform && ({
      transform: props.transform
    }),
  }
}
