'use strict'

import { SEQUENCE } from '.'

const defaultProps = {
  default: 150,
  base: 150,
  type: 'duration',
  ratio: SEQUENCE['perfect-fourth'],
  range: [-3, +12],
  unit: 'ms',
  sequence: {},
  scales: {},
  vars: {}
}

export const TIMING = defaultProps
