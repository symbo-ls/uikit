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
  boxSizing: 'border-box',
  position: 'relative',
  padding: 0,
  input: {
    width: '100%',
    height: '100%',
    padding: `${13 / 16}em`,
    border: 'none'
  },
  svg: {
    position: 'absolute',
    right: '1em',
    fontSize: '1em'
  }
}
