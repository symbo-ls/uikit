'use strict'

import { Button, Link } from '@rackai/symbols'

import { styleGrid } from './style'

var componentLink = {
  proto: Link,
  attr: {
    href: '#'
  }
}

export const grid = {
  style: styleGrid
}
