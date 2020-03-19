'use strict'

var blue = '#5081BB'
var green = '#4C904B'
var cyan = '#63B7A4'
var yellow = '#DAB648'
var orange = '#C37234'
var purple = '#7938B2'
var red = '#D13B3B'
var peach = '#EF604E'
var pink = '#9A36AF'
var white = '#FFFFFF'

var colors = {
  blue, green, cyan, yellow, orange, purple, red, peach, pink, white
}

var schemeA = {
  text: colors.blue,
  background: colors.white,
  border: colors.black.opacity(0.2),
  helpers: [],
  inverse: {} // schemeAInverse
}

var schemeB = {
  text: colors.white,
  background: colors.green,
  border: colors.black.opacity(0.2),
  helpers: [],
  inverse: {} // schemeAInverse
}

export default { colors, schemeA }
