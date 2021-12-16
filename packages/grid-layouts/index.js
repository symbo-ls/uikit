'use strict'

import { Link } from '@symbo.ls/link'

import { styleGrid } from './style'

const componentLink = { // eslint-disable-line
  extends: Link,
  attr: {
    href: '#'
  }
}

export const grid = {
  style: styleGrid
}
