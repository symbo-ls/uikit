'use strict'

import style from './style'
import SVG from '../SVG'

export default {
  proto: SVG,
  style,
  define: { name: param => param },
  name: ({props}) => props.icon,
  attr: { viewBox: '0 0 24 24' },
  src: ({ key, props, name }) => name || key || 'noIcon'
}
