'use strict'

import { Typography } from '@rackai/scratch'

let primaryFont = Object.keys(Typography)[0]
let defaultFont = primaryFont || '--system-default'

export default {
  appearance: 'none',
  border: 'none',
  outline: 0,
  padding: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '1.6em',
  height: '42px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
}
