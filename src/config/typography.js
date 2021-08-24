'use strict'

import { SEQUENCE } from '.'
import { fallBack, generateSequence } from '../utils'

const defaultProps = {
  base: 16,
  type: 'font-size',
  ratio: SEQUENCE['major-second'],
  range: [-3, +12],
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

export const TYPOGRAPHY = defaultProps
