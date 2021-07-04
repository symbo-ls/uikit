'use strict'

import { generateSequence } from '../utils'
import sequence from './sequence'

const defaultProps = {
  base: 16,
  type: 'font-size',
  ratio: sequence['major-second'],
  range: [-3, +7],
  sequence: {},
  scales: {}
}

export const settings = generateSequence(defaultProps)
export default settings.scales