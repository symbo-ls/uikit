'use strict'

import sequence from './sequence'
import { fallBack, generateSequence } from '../utils'

const defaultProps = {
  base: 16,
  type: 'font-size',
  ratio: sequence['major-second'],
  range: [-3, +7],
  sequence: {},
  scales: {}
}

generateSequence(defaultProps)

export const mapFontSize = val => fallBack({
  type: defaultProps.sequence,
  prop: 'fontSize',
  val,
  prefix: '--font-size-'
})

console.log(defaultProps.scales)

export default defaultProps
