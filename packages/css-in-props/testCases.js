'use strict'

import { set } from '@symbo.ls/scratch'
import { transformClassname, transformEmotion } from './src'

export const code_test = { // eslint-disable-line
  display: 'block',
  flex: 1,
  fontFamily: 'Code',
  fontSize: '0.765em',
  height: '100%',
  lineHeight: 1.8,
  margin: '0 0 0 0',
  maxHeight: '99%',
  maxWidth: 'F2',
  minWidth: 'F1',
  overflow: 'auto',
  padding: 'A',
  round: 'Z2',

  '@dark': { color: 'gray11', background: 'gray6 0.15' },
  '@light': { color: 'gray3', background: 'white .65' }
}

export const navLink_test = { // eslint-disable-line
  transition: 'color 100ms',
  textDecoration: 'none',
  fontWeight: 400,

  ':hover': { fontWeight: 500 },
  ':visited': { padding: '- - - X2' },

  '@dark': {
    color: 'gray6',
    ':visited': { color: 'gray6 .85' },
    ':hover': { color: 'gray9' }
  },

  '@light': {
    color: 'gray6',
    ':visited': { color: 'gray6 .85' },
    ':hover': { color: 'gray3' }
  }
}

set({
  color: {
    gray1: '#0C0C0D',
    gray2: '#141416',
    gray3: '#1C1C1F',
    gray4: '#252527',
    gray5: '#3E3E41',
    gray6: '#57575C',
    gray7: '#818186',
    gray8: '#A3A3A8',
    gray9: '#BDBDC1',
    gray10: '#cfcfd1',
    gray11: '#e0e0e2',
    gray12: '#e9e9ea'
  }
})

const codePropsTrasnsformClassname = transformClassname(code_test)
const codePropsTrasnsformEmotion = transformEmotion(codePropsTrasnsformClassname)
console.log(codePropsTrasnsformClassname)
console.log(codePropsTrasnsformEmotion)

const navLinkPropsTrasnsformClassname = transformClassname(navLink_test)
const navLinkPropsTrasnsformEmotion = transformEmotion(navLinkPropsTrasnsformClassname)
console.log(navLinkPropsTrasnsformClassname)
console.log(navLinkPropsTrasnsformEmotion)
