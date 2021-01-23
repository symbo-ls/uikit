'use strict'

export default {
  tag: 'a',
  define: {
    href: param => param,
    target: param => param,
    aria: param => param || {}
  },
  attr: {
    href: element => element.href,
    target: element => element.target,
    'aria-label': element => element.aria.label || element.text
  }
}
