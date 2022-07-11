'use strict'

import { mapFontSize, getFontFamily, FONT_FAMILY } from '@symbo.ls/scratch'

export const Text = {
  props: {},

  text: ({ props }) => props.text,

  class: {
    fontSize: ({ props }) => props.fontSize ? mapFontSize(props.fontSize) : null,
    fontFamily: ({ props }) => props.fontFamily && ({ fontFamily: getFontFamily(FONT_FAMILY, props.fontFamily) || props.fontFamily }),
    lineHeight: ({ props }) => ({ lineHeight: props.lineHeight }),
    textDecoration: ({ props }) => ({ textDecoration: props.textDecoration }),
    textTransform: ({ props }) => ({ textTransform: props.textTransform }),
    textAlign: ({ props }) => ({ textAlign: props.textAlign }),
    fontWeight: ({ props }) => ({ fontWeight: props.fontWeight })
  }
}
