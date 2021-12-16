'use strict'

import { Shape } from '@symbo.ls/shape'

export const Link = {
  extends: [Shape],
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
