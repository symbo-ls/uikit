'use strict'

import sequence from './sequence'
import Typography from './typography'

import { generateSequence } from '../utils'

const defaultProps = {
  base: Typography.base,
  type: 'spacing',
  ratio: sequence['phi'],
  range: [-5, +7],
  sequence: {},
  scales: {}
}

export const settings = generateSequence(defaultProps)
export default settings.scales
