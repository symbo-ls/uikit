'use strict'

export const Pseudo = {
  class: {
    content: ({ props }) => props.content && ({ content: props.content })
  }
}
