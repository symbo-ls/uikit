'use strict'

import { mapFontSize, getFontFamily, FONT_FAMILY } from '@symbo.ls/scratch'
import { mapBasedOnRatio } from '@symbo.ls/block' // eslint-disable-line no-unused-vars

export const Text = {
  props: {},

  text: ({ props }) => props.text,

  class: {
    fontSize: ({ props }) => props.fontSize ? mapFontSize(props.fontSize) : null,
    fontFamily: ({ props }) => props.fontFamily && ({ fontFamily: getFontFamily(FONT_FAMILY, props.fontFamily) || props.fontFamily }),
    lineHeight: ({ props }) => props.lineHeight && ({ lineHeight: props.lineHeight }),
    // lineHeight: ({ props }) => props.lineHeight && mapBasedOnRatio(props, 'lineHeight', null, ''),
    textDecoration: ({ props }) => props.textDecoration && ({ textDecoration: props.textDecoration }),
    textTransform: ({ props }) => props.textTransform && ({ textTransform: props.textTransform }),
    textAlign: ({ props }) => props.textAlign && ({ textAlign: props.textAlign }),
    fontWeight: ({ props }) => props.fontWeight && ({ fontWeight: props.fontWeight })
  }
}
