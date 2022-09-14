'use strict'

import { SEQUENCE } from './sequence'

const defaultProps = {
  browserDefault: 16,
  base: 16,
  type: 'font-size',
  ratio: SEQUENCE['minor-third'],
  range: [-3, +12],
  h1Matches: +6,
  lineHeight: 1.5,
  unit: 'em',
  styles: {},
  sequence: {},
  scales: {},
  vars: {}
}

export const TYPOGRAPHY = defaultProps
