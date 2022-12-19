'use strict'

import { exec } from '@domql/utils'
import { Focusable } from './atoms'

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
    href: element => exec(element.props.href, element) || exec(element.props, element).href,
    target: ({ props }) => props.target,
    'aria-label': ({ props }) => props.aria ? props.aria.label : props.text
  }
}
