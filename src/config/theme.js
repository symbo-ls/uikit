'use strict'

var themeA = { // eslint-disable-line no-unused-vars
  text: 'blue',
  background: 'white',
  border: 'black', // .opacity(0.2),
  helpers: [],
  themes: {},
  inverse: {} // schemeAInverse
}

export const THEME = {
  document: {
    color: 'white',
    background: 'black'
  }
}

export const returnSubThemeOrDefault = (orig, theme) => {
  if (orig.themes && orig.themes[theme]) return orig.themes[theme]
  if (orig[theme]) return [orig, orig[theme]]
  return orig
}
