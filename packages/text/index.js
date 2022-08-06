'use strict'

import { mapFontSize } from '@symbo.ls/scratch'
import { mapBasedOnRatio } from '@symbo.ls/block'

export const Text = {

  text: ({ props }) => props.text || '',

  class: {
    fontSize: ({ props }) => props.fontSize ? mapFontSize(props.fontSize) : null,
    lineHeight: ({ props }) => mapBasedOnRatio(props, 'lineHeight'),
    textDecoration: ({ props }) => ({ textDecoration: props.textDecoration }),
    textTransform: ({ props }) => ({ textTransform: props.textTransform }),
    textAlign: ({ props }) => ({ textAlign: props.textAlign }),
    fontWeight: ({ props }) => ({ fontWeight: props.fontWeight })
  }
}
