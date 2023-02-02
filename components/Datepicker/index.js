'use strict'

import style from './style'

import { SquareButton, Button } from '@symbo.ls/button'
import { Flex, Grid } from '@symbo.ls/atoms'

const buttonProps = {
  theme: 'transparent',
  color: '--theme-quinary-dark-color',
  ':hover': {
    theme: 'quinary .child'
  }
}

const aside = {
  props: {
    gap: 'X2',
    margin: '-Z - -Z -X2',
    padding: 'Z - Z X2',
    minHeight: '100%',
    height: '100%',
    width: '--spacing-D'
  },

  cnt: {
    extend: Flex,
    props: {
      flow: 'column',
      overflow: 'hidden auto',
      boxSize: '100% --spacing-D',
      top: '0',
      position: 'absolute',
      maxHeight: '100%',
      justifyContent: 'flex-end'
    },

    childExtend: {
      extend: Button,
      props: {
        ...buttonProps,
        fontSize: 'Z1'
      },
      text: ({ state }) => state.value
    }
  }

}

const main = {
  extend: Flex,

  props: {
    flex: 1,
    gap: 'X2',
    flow: 'column',

    header: {
      align: 'center space-between'
    }
  },

  header: {
    extend: Flex,
    left: {
      extend: SquareButton,
      props: {
        ...buttonProps,
        round: 'C',
        icon: 'arrowAngleLeft'
      }
    },
    month: {
      tag: 'span',
      text: 'December'
    },
    right: {
      extend: SquareButton,
      props: {
        ...buttonProps,
        round: 'C',
        icon: 'arrowAngleRight'
      }
    }
  },
  days: {
    extend: Flex,
    props: {
      flow: 'column',
      gap: 'X2'
    },
    childExtend: {
      extend: Grid,
      props: {
        columns: 'repeat(7, 1fr)',
        gap: 'X2'
      }
    },
    weekDays: {
      childExtend: {
        extend: Button,
        props: {
          ...buttonProps,
          fontSize: 'Z1',
          padding: 'X2'
        }
      },
      ...[
        { text: 'Mo' },
        { text: 'Tu' },
        { text: 'We' },
        { text: 'Th' },
        { text: 'Fr' },
        { text: 'Sa' },
        { text: 'Su' }
      ]
    },

    cnt: {
      childExtend: {
        extend: SquareButton,

        props: ({ key, state }) => ({
          ...buttonProps,
          theme: 'quaternary',
          active: key === '18',
          '.active': {
            theme: 'quinary'
          }
        })
      },

      ...new Array(31).fill(undefined).map((_, i) => ({ text: i + 1 }))
    }
  }
}

export const DatePicker = {
  style,
  extend: Flex,

  props: {
    position: 'relative',
    theme: 'quinary',
    transition: 'A all',
    round: 'Z',
    padding: 'Z Z2 Z X2',
    gap: 'X2',
    depth: 16,
    minHeight: '0',
    align: 'stretch center'
  },

  aside,
  main
}