'use strict'

import { Document, Typography } from '@rackai/scratch'

const primaryFont = Object.keys(Typography)[0]
const defaultFont = primaryFont || '--system-default'

export default {
  appearance: 'none',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  height: 'fit-content',
  fontFamily: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
}
