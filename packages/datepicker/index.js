'use strict'

import style from './style'

import { Icon } from '@symbo.ls/icon'

export const DatePicker = {
  style,

  props: {
    theme: 'lightDark',
    padding: 'A',
    round: 'Z',
    depth: 16
  },

  aside: {
    childExtends: { tag: 'button' },
    ...[
      { text: '2020' },
      // ...
    ]
  },

  main: {
    header: {
      icon: {
        extends: Icon,
        props: { icon: 'arrowMediumLeft' }
      },
      month: {
        childExtends: { tag: 'span' },
        ...[
          { text: 'january' },
          // ...
        ]
      },
      icon2: {
        extends: Icon,
        props: { icon: 'arrowMediumRight' }
      }
    },
    days: {
      tag: 'section',
      header: {
        childExtends: { tag: 'span' },
        ...[
          { text: 'Mo' },
          // ...
        ]
      },
      content: {
        childExtends: { tag: 'button' },
        ...[
          { text: '1' },
          // ...
        ]
      }
    }
  }
}
