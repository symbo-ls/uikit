'use strict'

import style from './style'
import SVG from '../SVG'

export default {
  proto: SVG,
  style,

  props: {
    sprite: {},
    icon: ''
  },

  attr: { viewBox: '0 0 24 24' },
  src: ({ key, props }) => props.sprite[props.icon || key] || props.sprite['no-icon']
}
