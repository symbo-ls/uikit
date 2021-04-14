'use strict'
import { Icon, Link } from '../'

var MenuItem = {
  proto: Link,
  define: { icon: param => param },
  glyph: {
    proto: Icon,
    name: element => element.parent.icon
  }
}

export const sideMenu = {
  caption: '',
  nav: {
    style: { 
      a: { cursor: 'pointer'}

    },
    childProto: Link,
    ...[{}]
  }
}
