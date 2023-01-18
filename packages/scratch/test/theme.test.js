'use strict'

import CONFIG from '../src/factory'
import { setEach, SETTERS, getTheme, setValue } from '../src/set'

setEach('color', {
  white: '#fff',
  black: '#000E',
  red: '#ed543f',
  yellow: '#f7c943',
  blue: '#00a8ff',
  green: '#00c49f'
})

test('should setup a THEME', () => {
  const themeA = {
    color: 'white',
    background: 'black'
  }
  expect(SETTERS.theme(themeA, 'white').value).toStrictEqual({
    color: 'rgba(255, 255, 255, 1)',
    background: 'rgba(0, 0, 0, 0.93)'
  })

  const themeB = {
    color: 'white 0.25',
    background: 'black'
  }
  expect(SETTERS.theme(themeB, 'white').value).toStrictEqual({
    color: 'rgba(255, 255, 255, 0.25)',
    background: 'rgba(0, 0, 0, 0.93)'
  })
})

test('should setup a THEME with a DARK MODE', () => {
  const theme = {
    color: 'white',
    background: 'black',
    variants: {
      dark: {
        background: 'white',
        color: 'black'
      }
    }
  }
  expect(SETTERS.theme(theme, 'white').value).toStrictEqual({
    color: 'rgba(255, 255, 255, 1)',
    background: 'rgba(0, 0, 0, 0.93)',
    '@media (prefers-color-scheme: dark)': {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(0, 0, 0, 0.93)'
    }
  })
})

test('should INVERSE a theme', () => {
  const theme = {
    color: 'white',
    background: 'black',
    variants: { inverse: true }
  }
  expect(SETTERS.theme(theme, 'white').variants.inverse.value).toStrictEqual({
    background: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 0.93)'
  })
  const themeB = {
    color: 'white',
    background: 'black',
    variants: {
      inverse: {
        color: 'black 0.65',
        background: 'white'
      }
    }
  }
  expect(SETTERS.theme(themeB, 'white').variants.inverse.value).toStrictEqual({
    background: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 0.65)'
  })
})

test('should set THEME from ANOTHER THEME', () => {
  const theme = {
    color: 'white',
    background: 'black 0.65'
  }
  setValue('THEME', theme, 'darkMode')
  const themeB = {
    background: 'white',
    color: 'black 0.65',
    variants: { dark: 'darkMode' }
  }
  setValue('THEME', themeB, 'white')

  expect(getTheme('white')).toStrictEqual({
    color: 'rgba(0, 0, 0, 0.65)',
    background: 'rgba(255, 255, 255, 1)',
    '@media (prefers-color-scheme: dark)': {
      color: 'rgba(255, 255, 255, 1)',
      background: 'rgba(0, 0, 0, 0.65)'
    }
  })
})

test('should set up HELPER themes', () => {
  const theme = {
    color: 'white',
    background: 'black 0.65'
  }
  setValue('THEME', theme, 'darkMode')
  const themeB = {
    color: 'white',
    background: 'black',
    helpers: ['darkMode', { color: 'red', background: 'yellow' }]
  }
  setValue('THEME', themeB, 'whiteWHelper')
  expect(CONFIG.THEME.whiteWHelper.helpers[0].value).toStrictEqual({
    color: 'rgba(255, 255, 255, 1)',
    background: 'rgba(0, 0, 0, 0.65)'
  })
  expect(CONFIG.THEME.whiteWHelper.helpers[1].value).toStrictEqual({
    color: 'rgba(237, 84, 63, 1)',
    background: 'rgba(247, 201, 67, 1)'
  })
})

test('should GET ANY THEME', () => {
  const theme = {
    color: 'white',
    background: 'black 0.65',
    variants: {
      dark: {
        background: 'white',
        color: 'black 0.35'
      },
      inverse: true
    },
    helpers: [{ color: 'blue', background: 'green' }]
  }
  setValue('THEME', theme, 'whiteToGet')
  expect(getTheme('whiteToGet')).toStrictEqual({
    color: 'rgba(255, 255, 255, 1)',
    background: 'rgba(0, 0, 0, 0.65)',
    '@media (prefers-color-scheme: dark)': {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(0, 0, 0, 0.35)'
    }
  })
  expect(getTheme(['whiteToGet', 'inverse'])).toStrictEqual({
    background: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 0.65)'
  })
  expect(getTheme(['whiteToGet', 'dark'])).toStrictEqual({
    background: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 0.35)'
  })
  expect(getTheme(['whiteToGet', '0'])).toStrictEqual({
    color: 'rgba(0, 168, 255, 1)',
    background: 'rgba(0, 196, 159, 1)'
  })
})
