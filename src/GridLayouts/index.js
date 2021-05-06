'use strict'

import { Button, Link } from '@rackai/symbols'

import { styleGrid, styleGrid2 } from './style'

let componentLink = {
  proto: Link,
  attr: {
    href: '#'
  }
}

export const grid = {
  style: styleGrid
}

export const grid2 = {
  style: styleGrid2
}
