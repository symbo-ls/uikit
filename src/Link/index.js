'use strict'

export default {
  tag: 'a',
  props: {
    href: '',
    target: '',
    aria: {}
  },
  attr: {
    href: ({ props }) => props.href,
    target: ({ props }) => props.target,
    'aria-label': ({ props, ...el }) => {
      return props || props.aria.label || props.text
    }
  }
}
