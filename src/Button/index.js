'use strict'

// import { method, font, sizing } from 'scratch'
// import { font, color, shape } from '../config'
var func = param => param

var style = func`
  padding: 0 2em;
  border-radius: 4px;
  line-height: 1;
`
console.log(style)

var Button = {
  tag: 'button',
  class: {
    default: style,
    theme: element => element.theme,
    shape: element => element.shape,
    interactive: element => element.interactive
  },

  define: {
    theme: param => param || '',
    shape: param => param || '',
    interactive: param => (param || param === undefined) ? 'interactive' : ''
  },

  // theme: color.schemeA,
  // shape: shape.circular,
  interactive: true
}

export default Button
