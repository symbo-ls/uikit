'use strict'

export const Interaction = {
  class: {
    userSelect: ({ props }) => props.userSelect && ({ userSelect: props.userSelect }),
    pointerEvents: ({ props }) => props.pointerEvents && ({ pointerEvents: props.pointerEvents }),
    cursor: ({ props }) => props.cursor && ({ cursor: props.cursor })
  }
}
