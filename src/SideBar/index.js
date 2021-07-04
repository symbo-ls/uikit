'use strict'
import { Icon, Link } from '../'

const MenuItem = {
  proto: Link,
  props: { icon: '' },
  glyph: {
    proto: Icon,
    name: ({ props }) => props.icon
  }
}

export default {
  caption: '',
  nav: {
    style: {
      a: { cursor: 'pointer' }
    },
    childProto: MenuItem,
    ...[{}]
  }
}
