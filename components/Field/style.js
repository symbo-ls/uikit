'use strict'

import { TYPOGRAPHY } from '@symbo.ls/scratch'

const primaryFont = Object.keys(TYPOGRAPHY)[0]
const defaultFont = primaryFont || '--system-default' // eslint-disable-line

export default {
  appearance: 'none',
  outline: 0,
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  position: 'relative',
  padding: 0,

  width: '16em',

  input: {
    width: '100%',
    height: '100%',
    border: 'none'
  },

  svg: {
    position: 'absolute',
    right: '1em'
  }
}
