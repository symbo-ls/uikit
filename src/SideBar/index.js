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

export const Sidebar = {
  caption: '',
  nav: {
    style: {
      a: { cursor: 'pointer' }
    },
    childProto: MenuItem,
    ...[{}]
  }
}
