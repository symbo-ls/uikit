'use strict'

import { SEQUENCE, TYPOGRAPHY } from '.'

const defaultProps = {
  base: TYPOGRAPHY.base,
  type: 'spacing',
  ratio: SEQUENCE.phi,
  range: [-5, +15],
  subSequence: true,
  unit: 'em',
  sequence: {},
  scales: {},
  vars: {}
}

export const SPACING = defaultProps
