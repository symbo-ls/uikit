'use strict'

var setCustomFont = (name, weight, url) => `@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: ${weight};
  src: url(${weight}) format('woff2');
}`

export default setCustomFont
