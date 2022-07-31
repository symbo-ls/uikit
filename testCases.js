'use strict'

import { transformClassname } from './src'

export const code_test = { // eslint-disable-line
  display: 'block',
  flex: 1,
  fontFamily: 'Code',
  fontSize: '0.765em',
  height: '100%',
  lineHeight: 1.8,
  margin: '0 0 0 0',
  maxHeight: '99%',
  maxWidth: 'I',
  minWidth: 'G',
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

const trasnsformed = transformClassname(navLink_test)

console.log(trasnsformed)
