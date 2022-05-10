'use strict'

import { mapFontSize } from '@symbo.ls/scratch'

export const Text = {
  props: {},

  text: ({ props }) => props.text,

  class: {
    fontSize: ({ props }) => props.fontSize ? mapFontSize(props.fontSize) : null,
    lineHeight: ({ props }) => ({ lineHeight: props.lineHeight }),
    textDecoration: ({ props }) => ({ textDecoration: props.textDecoration }),
    fontWeight: ({ props }) => ({ fontWeight: props.fontWeight })
  }
}
