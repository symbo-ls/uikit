'use strict'

import { Typography } from '@rackai/scratch'

const primaryFont = Object.keys(Typography)[0]
const defaultFont = primaryFont || '--system-default'

export default {
  appearance: 'none',
  outline: 0,
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  height: '42px',
  boxSizing: 'border-box',
  position: 'relative',
  padding: 0,
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: '22px',
    border: 'none',
    fontSize: '16px'
  },
  svg: {
    position: 'absolute',
    right: '16px',
    fontSize: '16px'
  }
}
