'use strict'

import { Icon } from '@symbo.ls/icon'
import { Link } from '@symbo.ls/link'

const MenuItem = {
  extends: Link,
  props: { icon: '' },
  glyph: {
    extends: Icon,
    name: ({ props }) => props.icon
  }
}

export const Sidebar = {
  caption: '',
  nav: {
    style: {
      a: { cursor: 'pointer' }
    },
    childExtends: MenuItem,
    ...[{}]
  }
}
