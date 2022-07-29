'use strict'

import set, { setEach, SETTERS } from '../src/set'

test('should setup a GRADIENT', () => {
  const color = `linear-gradient(0deg,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.07) 100%
  )`

  expect(SETTERS.gradient(color, 'white')).toStrictEqual({
    var: '--gradient-white',
    value: `linear-gradient(0deg,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.07) 100%
  )`
  })
})

const GRADIENT = {
  dark: {
    value: `linear-gradient(0deg,
      rgba(0,0,0,0.06) 0%,
      rgba(0,0,0,0.07) 100%
    )`
  },
  light: {
    value: `linear-gradient(0deg,
      rgba(255,255,255,0.05) 0%,
      rgba(255,255,255,0.06) 100%
    )`
  }
}

const EXPECTED = {
  dark: {
    var: '--gradient-dark',
    value: `linear-gradient(0deg,
      rgba(0,0,0,0.06) 0%,
      rgba(0,0,0,0.07) 100%
    )`
  },
  light: {
    var: '--gradient-light',
    value: `linear-gradient(0deg,
      rgba(255,255,255,0.05) 0%,
      rgba(255,255,255,0.06) 100%
    )`
  }
}

test('should set MULTIPLE GRADIENTS', () => {
  expect(setEach('gradient', GRADIENT)).toStrictEqual(EXPECTED)
})

test('should set COLORS from entire config', () => {
  const CONFIG = { GRADIENT }
  expect(set(CONFIG).GRADIENT).toStrictEqual(EXPECTED)
})
