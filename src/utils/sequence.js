'use strict'

import { UNIT } from '../defaultConfig'
import { CONFIG } from '../factory'
import { isString } from './object'

export const numToLetterMap = {
  '-6': 'U',
  '-5': 'V',
  '-4': 'W',
  '-3': 'X',
  '-2': 'Y',
  '-1': 'Z',
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
  8: 'I',
  9: 'J',
  10: 'K',
  11: 'L',
  12: 'M',
  13: 'N',
  14: 'O',
  15: 'P',
  16: 'Q',
  17: 'R',
  18: 'S',
  19: 'T'
}

const setSequenceValue = (props, sequenceProps) => {
  const { key, variable, value, scaling, index } = props
  sequenceProps.sequence[key] = {
    key,
    decimal: Math.round(value * 100) / 100,
    val: Math.round(value),
    scaling,
    index,
    variable
  }
  sequenceProps.scales[key] = scaling
  sequenceProps.vars[variable] = scaling + sequenceProps.unit
}

const dashize = val => val
  .replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
  .replace('.', '-')

export const generateSubSequence = (props, sequenceProps) => {
  const { key, base, value, ratio, variable, index } = props

  const next = value * ratio
  const smallscale = (next - value) / ratio

  const valueRounded = Math.round(value)
  const nextRounded = Math.round(next)
  const diffRounded = nextRounded - valueRounded

  let arr = []
  const first = value + smallscale
  const second = next - smallscale
  const middle = (first + second) / 2
  if (diffRounded > 16) arr = [first, middle, second]
  else arr = [first, second]

  arr.map((v, k) => {
    const scaling = Math.round(v / base * 1000) / 1000
    const newVar = variable + (k + 1)

    const props = {
      key: key + (k + 1),
      variable: newVar,
      value: v,
      scaling,
      index: index + (k + 1) / 10
    }

    return setSequenceValue(props, sequenceProps)
  })
}

export const generateSequence = (sequenceProps) => {
  const { type, base, ratio, range, subSequence } = sequenceProps
  const n = Math.abs(range[0]) + Math.abs(range[1])
  const prefix = '--' + type.replace('.', '-') + '-'

  for (let i = 0; i <= n; i++) {
    const key = range[1] - i
    const letterKey = numToLetterMap[key]
    const value = base * Math.pow(ratio, key)
    const scaling = Math.round(value / base * 1000) / 1000
    const variable = prefix + letterKey

    const props = {
      key: letterKey,
      variable,
      value,
      base,
      scaling,
      ratio,
      index: key
    }

    setSequenceValue(props, sequenceProps)

    if (subSequence) generateSubSequence(props, sequenceProps)
  }
  return sequenceProps
}

export const getSequenceValue = (value = 'A', sequenceProps) => {
  const {
    sequence,
    unit = UNIT.default,
    useVariable
  } = sequenceProps

  if (isString(value) && value.slice(0, 2) === '--') {
    return `var(${value})`
  }

  const prefix = `--${dashize(sequenceProps.type.replace('.', '-'))}-`

  const startsWithDashOrLetterRegex = /^-?[a-zA-Z]/i
  const startsWithDashOrLetter = startsWithDashOrLetterRegex.test(value)

  if (
    value === 'none' ||
    value === 'auto' ||
    value === 'fit-content' ||
    value === 'min-content' ||
    value === 'max-content' ||
    !startsWithDashOrLetter
  ) return value

  const letterVal = value.toUpperCase()
  const isNegative = letterVal.slice(0, 1) === '-' ? '-' : ''
  let absValue = isNegative ? letterVal.slice(1) : letterVal

  let mediaName = ''
  if (absValue.includes('-')) {
    mediaName = '-' + absValue.split('-')[1].toLowerCase()
    absValue = absValue.split('-')[0]
  }

  if (useVariable || CONFIG.useVariable) {
    const varValue = `var(${prefix}${absValue}${mediaName})`
    return isNegative ? `calc(${varValue} * -1)` : varValue
  }

  const sequenceItem = sequence ? sequence[absValue] : null
  if (!sequenceItem) return console.warn('can\'t find', sequence, absValue)

  if (unit === 'ms' || unit === 's') {
    return isNegative + sequenceItem.value + unit
  }

  return isNegative + sequenceItem.scaling + unit
}

export const getSequenceValuePropertyPair = (value, propertyName, sequenceProps) => {
  if (typeof value !== 'string') {
    console.warn(propertyName, value, 'is not a string')
    return ({})
  }
  if (value === '-' || value === '') return ({})
  return { [propertyName]: getSequenceValue(value, sequenceProps) }
}

export const findHeadings = propertyNames => {
  const { h1Matches, sequence } = propertyNames
  return new Array(6).fill(null).map((_, i) => {
    const findLetter = numToLetterMap[h1Matches - i]
    return sequence[findLetter]
  })
}
