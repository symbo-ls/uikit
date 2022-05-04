'use strict'

import { mapFontSize } from '@symbo.ls/scratch'

export const Text = {
  text: ({ props }) => props.text,

  class: {
    fontSize: ({ props }) => props.fontSize ? mapFontSize(props.fontSize) : null
  }
}
