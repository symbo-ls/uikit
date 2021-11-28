'use strict'

const themeA = { // eslint-disable-line no-unused-vars
  text: 'blue',
  background: 'white',
  border: 'black', // .opacity(0.2),
  active: {},
  helpers: [],
  themes: {},
  inverse: {} // schemeAInverse
}

export const THEME = {}

export const returnSubThemeOrDefault = (orig, theme) => {
  if (!orig) return
  if (orig.themes && orig.themes[theme]) return orig.themes[theme]
  if (orig[theme]) return [orig, orig[theme]]
  return orig
}
