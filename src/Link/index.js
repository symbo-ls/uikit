'use strict'

import { exec } from '@domql/utils'
import { Shape, Text } from '..'

export const Link = {
  proto: [Shape, Text],
  tag: 'a',
  props: {
    theme: 'link',
    aria: {},
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  attr: {
    href: element => exec(element.props.href, element) || exec(element.props, element).href,
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria.label || props.text
  }
}
