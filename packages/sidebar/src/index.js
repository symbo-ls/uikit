'use strict'

import { Icon } from '@symbo.ls/icon'
import { Link } from '@symbo.ls/link'

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
