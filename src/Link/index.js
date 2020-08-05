'use strict'

export default {
  tag: 'a',
  define: {
    href: param => param,
    aria: param => param || {}
  },
  attr: {
    href: element => element.href,
    'aria-label': element => element.aria.label || element.text
  }
}
