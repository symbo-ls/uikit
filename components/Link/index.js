'use strict'

import { router } from '@domql/router'
import { Focusable } from '@symbo.ls/atoms'

export const Link = {
  extend: Focusable,
  tag: 'a',
  props: {
    aria: {},
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'currentColor'
  },
  attr: {
    href: element => {
      const { exec } = element.context.utils
      return exec(element.props.href, element) || exec(element.props, element).href
    },
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria ? props.aria.label : props.text
  }
}

export const RouteLink = {
  extend: Link,
  on: {
    click: (event, element, state) => {
      const root = element.lookup('app')
      const { href } = element.props
      const firstThree = href[0] + href[1] + href[2]
      if (href && firstThree !== 'htt' && firstThree !== 'ske') {
        router(root, href, {})
        event.preventDefault()
      }
    }
  }
}
