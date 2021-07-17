'use strict'

import { TYPOGRAPHY } from '@rackai/scratch'

const primaryFont = Object.keys(TYPOGRAPHY)[0]
const defaultFont = primaryFont || '--system-default'

export default {
  appearance: 'none',
  outline: 0,
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  position: 'relative',
  padding: 0,
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
