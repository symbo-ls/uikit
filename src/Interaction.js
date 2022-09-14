'use strict'

export const Interaction = {
  class: {
    pointerEvents: ({ props }) => props.pointerEvents && ({ pointerEvents: props.pointerEvents }),
    cursor: ({ props }) => props.cursor && ({ cursor: props.cursor })
  }
}
