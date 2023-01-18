'use strict'

import { getActiveConfig } from '../factory'
import { isString } from '@domql/utils'
import { toDashCase } from '@symbo.ls/utils'

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
    decimal: ~~(value * 100) / 100,
    val: ~~(value),
    scaling,
    index,
    variable
  }
  sequenceProps.scales[key] = scaling
  sequenceProps.vars[variable] = scaling + sequenceProps.unit
}

export const generateSubSequence = (props, sequenceProps) => {
  const { key, base, value, ratio, variable, index } = props

  const next = value * ratio
  const diff = next - value
  const smallscale = diff / 1.618

  const valueRounded = ~~(value)
  const nextRounded = ~~(next)
  const diffRounded = nextRounded - valueRounded

  let arr = []
  const first = next - smallscale
  const second = value + smallscale
  const middle = (first + second) / 2
  if (diffRounded > 16) arr = [first, middle, second]
  else arr = [first, second]

  arr.map((v, k) => {
    const scaling = ~~(v / base * 1000) / 1000
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

const switchSequenceOnNegative = (key, base, ratio) => {
  // const values = Object.values(SEQUENCE)
  // const index = values.indexOf(ratio)
  // const diffRatio = ratio / SPACING.ratio
  // const total = values[values.length - 1] - values[0]
  // const avg = total / 2
  // const diff = avg - ratio
  // const scale = total / ratio
  // const finalDiff = avg + avg / diffRatio

  // if (key < 0) return base * Math.pow(avg, key)
  return base * Math.pow(ratio, key)
}

export const generateSequence = (sequenceProps) => {
  const { type, base, ratio, range, subSequence } = sequenceProps
  const n = Math.abs(range[0]) + Math.abs(range[1])
  const prefix = '--' + (type && type.replace('.', '-')) + '-'

  for (let i = 0; i <= n; i++) {
    const key = range[1] - i
    const letterKey = numToLetterMap[key]
    const value = switchSequenceOnNegative(key, base, ratio)
    const scaling = ~~(value / base * 100) / 100
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
  const CONFIG = getActiveConfig()
  const { UNIT } = CONFIG

  const {
    sequence,
    unit = UNIT.default,
    useVariable
  } = sequenceProps

  if (isString(value) && value.slice(0, 2) === '--') return `var(${value})`

  const prefix = `--${toDashCase(sequenceProps.type.replace('.', '-'))}-`

  const startsWithDashOrLetterRegex = /^-?[a-zA-Z]/i
  const startsWithDashOrLetter = startsWithDashOrLetterRegex.test(value)

  if (
    value === 'none' ||
    value === 'auto' ||
    value === 'unset' ||
    value === 'inherit' ||
    value === 'fit-content' ||
    value === 'min-content' ||
    value === 'max-content' ||
    value.includes('calc') ||
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

  const varValue = v => `var(${prefix}${v}${mediaName})`
  if (absValue.includes('+')) {
    const args = absValue.split('+')
    const [first, second] = args
    const joint = `${varValue(first)} + ${varValue(second)}`
    return isNegative ? `calc((${joint}) * -1)` : `calc(${joint})`
  } else if (absValue.includes('-')) {
    const args = absValue.split('-')
    const [first, second] = args
    const joint = `${varValue(first)} - ${varValue(second)}`
    return isNegative ? `calc((${joint}) * -1)` : `calc(${joint})`
  }

  // if subsequence is not set but value is applied
  if (!sequence[absValue] && absValue.length === 2) {
    if (CONFIG.verbose) console.warn(absValue, '- value is not found because `subSequence` is set to false')
    absValue = absValue.slice(0, 1)
  }

  if (useVariable || CONFIG.useVariable) {
    const varValue = `var(${prefix}${absValue}${mediaName})`
    return isNegative ? `calc(${varValue} * -1)` : varValue
  }

  const sequenceItem = sequence ? sequence[absValue] : null
  if (!sequenceItem) return console.warn('can\'t find', sequence, absValue)

  if (unit === 'ms' || unit === 's') {
    return isNegative + sequenceItem.val + unit
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

export const findHeadingLetter = (h1Matches, index) => numToLetterMap[h1Matches - index]

export const findHeadings = propertyNames => {
  const { h1Matches, sequence } = propertyNames
  return new Array(6).fill(null).map((_, i) => {
    const findLetter = findHeadingLetter(h1Matches, i)
    return sequence[findLetter]
  })
}
