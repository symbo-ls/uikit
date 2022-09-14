'use strict'

import { exec } from '@domql/utils'

export const Link = {
  tag: 'a',
  props: {
    aria: {},
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'currentColor'
    // style: { '&::-webkit-any-link': { color: 'currentColor' } }
  },
  attr: {
    href: element => exec(element.props.href, element) || exec(element.props, element).href,
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria.label || props.text
  }
}
