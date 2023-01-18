'use strict'

import set, { setEach, SETTERS } from '../src/set'

test('should setup a COLOR', () => {
  const colorHEX = '#fff'
  const colorHEXA = '#fffaa'
  const colorRGB = 'rgba(255, 255, 255)'
  const colorRGBA = 'rgba(255, 255, 255, 0.5)'

  expect(SETTERS.color(colorHEX, 'white')).toStrictEqual({
    var: '--color-white',
    rgb: '255, 255, 255',
    alpha: 1,
    value: 'rgba(255, 255, 255, 1)'
  })

  expect(SETTERS.color(colorHEXA, 'white')).toStrictEqual({
    var: '--color-white',
    rgb: '255, 255, 255',
    alpha: 0.67,
    value: 'rgba(255, 255, 255, 0.67)'
  })

  expect(SETTERS.color(colorRGB, 'white')).toStrictEqual({
    var: '--color-white',
    rgb: '255, 255, 255',
    alpha: 1,
    value: 'rgba(255, 255, 255, 1)'
  })

  expect(SETTERS.color(colorRGBA, 'white')).toStrictEqual({
    var: '--color-white',
    rgb: '255, 255, 255',
    alpha: 0.5,
    value: 'rgba(255, 255, 255, 0.5)'
  })
})

const COLOR = {
  black: '#000',
  blue: {
    value: '#0079FD'
  },
  green: {
    value: 'rgba(255, 10, 255)'
  },
  indigo: {
    value: '#50E1FFAA'
  }
}

const EXPECTED = {
  black: {
    var: '--color-black',
    rgb: '0, 0, 0',
    alpha: 1,
    value: 'rgba(0, 0, 0, 1)'
  },
  blue: {
    var: '--color-blue',
    rgb: '0, 121, 253',
    alpha: 1,
    value: 'rgba(0, 121, 253, 1)'
  },
  green: {
    var: '--color-green',
    rgb: '255, 10, 255',
    alpha: 1,
    value: 'rgba(255, 10, 255, 1)'
  },
  indigo: {
    var: '--color-indigo',
    rgb: '80, 225, 255',
    alpha: 0.67,
    value: 'rgba(80, 225, 255, 0.67)'
  }
}

test('should set a COLOR PALETTE', () => {
  expect(setEach('color', COLOR)).toStrictEqual(EXPECTED)
})

test('should set COLORS from entire config', () => {
  const CONFIG = { COLOR }
  expect(set(CONFIG).COLOR).toStrictEqual(EXPECTED)
})
