'use strict'

import { UNIT } from '../config'

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

const setSequenceValue = ({ key, variable, value, scaling, state, index }) => {
  state.sequence[variable] = {
    key,
    decimal: Math.round(value * 100) / 100,
    val: Math.round(value),
    scaling,
    index
  }
  state.scales[variable] = scaling
}

export const generateSubSequence = ({ key, base, value, ratio, variable, state, index }) => {
  const next = value * ratio
  const smallscale = (next - value) / ratio

  const valueRounded = Math.round(value)
  const nextRounded = Math.round(next)
  const diffRounded = nextRounded - valueRounded

  let arr = []
  const first = next - smallscale
  const second = value + smallscale
  const middle = (first + second) / 2
  if (diffRounded > 100) arr = [first, middle, second]
  else arr = [first, second]
  // else if (diffRounded > 2) arr = [first, second]
  // else if (diffRounded > 1) arr = [middle]

  arr.map((v, k) => {
    const scaling = Math.round(v / base * 1000) / 1000
    const newVar = variable + (k + 1)

    return setSequenceValue({ key: key + (k + 1), variable: newVar, value: v, scaling, state, index: index + (k + 1) / 10 })
  })
}

export const generateSequence = ({ type, base, ratio, range, subSequence, ...state }) => {
  const n = Math.abs(range[0]) + Math.abs(range[1])
  const prefix = '--' + type + '-'
  for (let i = 0; i <= n; i++) {
    const key = range[1] - i
    const letterKey = numToLetterMap[key]
    const value = base * Math.pow(ratio, key)
    const scaling = Math.round(value / base * 1000) / 1000
    const variable = prefix + letterKey

    setSequenceValue({ key: letterKey, variable, value, scaling, state, index: key })

    if (subSequence) generateSubSequence({ key: letterKey, base, value, ratio, variable, state, index: key })
  }
  return state
}

export const fallBack = ({ type, prop, val = 'A', prefix = '--font-size-', unit = UNIT.default }) => {
  if (typeof val !== 'string') console.warn(prop, val, 'is not a string')

  if (val === '-' || val === '') return ({ })
  if (val === 'none' || val === 'auto' || val === 'fit-content' || val === 'min-content' || val === 'max-content') return ({ [prop]: val })

  // const startsWithLetterRegex = /^[a-zA-Z]/i
  const startsWithLetterRegex = /^-?[a-zA-Z]/i
  // const hasLetter = /[A-Za-z]+/.test(val)
  const startsWithLetter = startsWithLetterRegex.test(val)
  if (!startsWithLetter) return ({ [prop]: val })

  const letterVal = val.toUpperCase()
  const isNegative = letterVal.slice(0, 1) === '-' ? '-' : ''
  const simplyLetterVal = isNegative ? letterVal.slice(1) : letterVal

  const value = type ? type[prefix + simplyLetterVal] : null
  if (!value) return console.warn('can\'t find', type, prefix + simplyLetterVal, simplyLetterVal)

  if (unit === 'ms' || unit === 's') {
    return ({ [prop]: isNegative + value.val + unit })
  }
  return ({
    [prop]: isNegative + value.val + value.unit,
    [prop]: isNegative + value.scaling + 'em'
  })
}

export const findHeadings = (TYPOGRAPHY) => {
  const { h1Matches, type, sequence } = TYPOGRAPHY
  return new Array(6).fill(null).map((_, i) => {
    const findLetter = numToLetterMap[h1Matches - i]
    return sequence[`--${type}-${findLetter}`]
  })
}
