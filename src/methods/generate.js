'use strict'

import { themeMap } from '../config/theme'

// var pairAsInvert = (scheme, referenced) => cx(scheme, referenced)

const mapThemeCSS = scheme => {
  let str = ''
  for (const prop in scheme) {
    const mappedProp = themeMap[prop]
    const value = scheme[prop]
    if (mappedProp && value) {
      str += `${mappedProp}: ${value}`
    }
  }
  return str
}

const generateTheme = scheme => {
  const { helpers, inverse } = scheme

  let rule = `
    ${mapThemeCSS(scheme)}
  `

  if (inverse) {
    rule += `&.inverse { ${inverse} }`
  }

  if (helpers) {
    for (const prop in helpers) {
      const value = helpers[prop]
      rule += `.${prop} { ${value} }`
    }
  }

  return rule
}

export default { generateTheme }
