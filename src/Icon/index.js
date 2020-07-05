'use strict'

import sprite from './svg'
import style from './style'
import SVG from '../SVG'

export default {
  proto: SVG,
  style,
  define: { name: param => param },
  file: element => sprite[element.name || element.key],
  attr: { viewBox: '0 0 16 16' }
}
