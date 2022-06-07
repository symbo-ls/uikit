'use strict'

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
    href: ({ props }) => props.href,
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria.label || props.text
  }
}
