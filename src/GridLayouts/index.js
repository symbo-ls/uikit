'use strict'

import { Button, Link } from '..'

import { styleGrid, styleGrid2 } from './style'

const componentLink = {
  extend: Link,
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
