'use strict'

export const returnSubThemeOrDefault = (orig, theme) => {
  if (!orig) return
  if (orig.themes && orig.themes[theme]) return orig.themes[theme]
  if (orig[theme]) return [orig, orig[theme]]
  return orig
}
