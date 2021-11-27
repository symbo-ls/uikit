'use strict'

import set, { setEach, SETTERS } from '../src/methods/set'

setEach('color', {
  white: '#fff',
  black: '#000E'
})

test('should setup a THEME', () => {
  const themeA = {
    color: 'white',
    background: 'black'
  }
  const themeB = {
    color: 'white 0.25',
    background: 'black'
  }
  expect(SETTERS.theme(themeA, 'white')).toStrictEqual({
    color: 'rgba(255, 255, 255, 1)',
    background: 'rgba(0, 0, 0, 0.93)'
  })
  expect(SETTERS.theme(themeB, 'white')).toStrictEqual({
    color: 'rgba(255, 255, 255, 0.25)',
    background: 'rgba(0, 0, 0, 0.93)'
  })
})

test('should setup a THEME with a DARK MODE', () => {
  const theme = {
    color: 'white',
    background: 'black',
    theme: {
      dark: {
        background: 'white',
        color: 'black'
      }
    }
  }
  expect(SETTERS.theme(theme, 'white')).toStrictEqual({
    value: {
      color: 'rgba(255, 255, 255, 1)',
      background: 'rgba(0, 0, 0, 0.93)',
      '@media (prefers-color-scheme: dark)': {
        background: 'rgba(255, 255, 255, 1)',
        color: 'rgba(0, 0, 0, 0.93)'
      }
    }
  })
})
