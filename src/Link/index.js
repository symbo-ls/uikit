'use strict'

export const Link = {
  tag: 'a',
  props: {
    href: '',
    target: '',
    aria: {}
  },
  attr: {
    href: ({ props }) => props.href,
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria.label || props.text
  }
}
