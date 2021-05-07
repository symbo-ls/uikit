'use strict'
import { Icon, Link } from '../'

const MenuItem = {
  proto: Link,
  define: { icon: param => param },
  glyph: {
    proto: Icon,
    name: element => element.parent.icon
  }
}

export const sideMenu = {
  border: '1px solid red',
  caption: '',
  nav: {
    style: {
      a: { cursor: 'pointer' }
    },
    childProto: MenuItem,
    ...[{}]
  }
}
