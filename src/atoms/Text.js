'use strict'

import { getFontSizeByKey, getFontFamily } from '@symbo.ls/scratch'

export const Text = {
  props: {},

  text: ({ props }) => props.text,

  class: {
    fontSize: ({ props }) => props.fontSize ? getFontSizeByKey(props.fontSize) : null,
    fontFamily: ({ props }) => props.fontFamily && ({ fontFamily: getFontFamily(props.fontFamily) || props.fontFamily }),
    lineHeight: ({ props }) => props.lineHeight && ({ lineHeight: props.lineHeight }),
    // lineHeight: ({ props }) => props.lineHeight && getSpacingBasedOnRatio(props, 'lineHeight', null, ''),
    textDecoration: ({ props }) => props.textDecoration && ({ textDecoration: props.textDecoration }),
    textTransform: ({ props }) => props.textTransform && ({ textTransform: props.textTransform }),
    whiteSpace: ({ props }) => props.whiteSpace && ({ whiteSpace: props.whiteSpace }),
    textAlign: ({ props }) => props.textAlign && ({ textAlign: props.textAlign }),
    fontWeight: ({ props }) => props.fontWeight && ({ fontWeight: props.fontWeight })
  }
}

export const P = { tag: 'p' }
export const Span = { tag: 'span' }
export const Caption = { tag: 'caption' }
export const Strong = { tag: 'strong' }
