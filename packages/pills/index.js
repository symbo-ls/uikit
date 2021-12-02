'use strict'
import Shape from '../Shape'

export const Pills = {
  style: {
    display: 'flex',
    div: {
      width: '6px',
      height: '6px',
      background: 'white'
    },
    'div:not(:last-child)': {
      marginRight: '10px'
    },
    'div:first-child': { opacity: '.5' },
    'div:nth-child(2)': { opacity: '.3' },
    'div:nth-child(3)': { opacity: '.3' }
  },
  childProto: {
    tag: 'div',
    proto: Shape,
    props: {
      round: 42,
      theme: 'White'
    }
  },
  ...[
    {}, {}, {}
  ]
}
