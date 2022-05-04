'use strict'

import { mapFontSize } from '@symbo.ls/scratch'

export const Text = {
  text: ({ props }) => props.text,

  class: {
    size: ({ props }) => props.fontSize && mapFontSize(props.fontSize)
  }
}
