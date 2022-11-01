'use strict'

import { Icon, Link } from '.'

const MenuItem = {
  extend: Link,
  props: { icon: '' },
  glyph: {
    extend: Icon,
    name: ({ props }) => props.icon
  }
}

export const Sidebar = {
  caption: '',
  nav: {
    style: {
      a: { cursor: 'pointer' }
    },
    childExtend: MenuItem,
    ...[{}]
  }
}
