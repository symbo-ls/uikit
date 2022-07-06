'use strict'

import { exec } from '@domql/utils'
import { Shape, Text } from '..'

export const Link = {
  proto: [Shape, Text],
  tag: 'a',
  props: {
    href: '',
    target: '',
    theme: 'link',
    aria: {}
  },
  attr: {
    href: element => exec(element.props.href, element),
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria.label || props.text
  }
}
