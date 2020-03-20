'use strict'

import { themeMap } from '../config/theme'

// var pairAsInvert = (scheme, referenced) => cx(scheme, referenced)

var mapTheme = scheme => {
  var str = ''
  for (let prop in scheme) {
    var mappedProp = themeMap[prop]
    var value = scheme[prop]
    if (mappedProp && value) {
      str += `${mappedProp}: ${value}`
    }
  }
  return str
}

var generateTheme = scheme => {
  var { helpers, inverse } = scheme

  var rule = `
    ${mapTheme(scheme)}
  `

  if (inverse) {
    rule += `&.inverse { ${inverse} }`
  }

  if (helpers) {
    for (var prop in helpers) {
      var value = helpers[prop]
      rule += `.${prop} { ${value} }`
    }
  }

  return rule
}

export default { generateTheme }
