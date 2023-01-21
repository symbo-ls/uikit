'use strict'

import style from './style'

import { Icon } from '@symbo.ls/icon'

export const DatePicker = {
  props: {
    theme: 'lightDark',
    padding: 'A',
    round: 'Z',
    depth: '16'
  },

  aside: {
    childExtends: { tag: 'button' }
  },

  main: {
    header: {
      icon: {
        extends: Icon,
        props: { icon: 'arrowMediumLeft' }
      },
      month: {
        childExtends: { tag: 'span' },
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
      },
      content: {
        childExtends: { tag: 'button' },
      }
    }
  }
}
