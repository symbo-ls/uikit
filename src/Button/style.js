'use strict'

import { Typography } from 'scratch'

var primaryFont = Object.keys(Typography)[0]
var defaultFont = primaryFont || '--system-default'

export default {
  appearance: 'none',
  outline: 0,
  cursor: 'pointer',
  font: 'inherit'
}
