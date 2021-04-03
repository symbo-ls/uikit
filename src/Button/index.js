'use strict'

import { Shape, IconText, Direction, User } from '../'
import { userBundle } from '../User'

import style from './style'

const Button = {
  proto: Shape,
  tag: 'button',
  style
}
export const buttonCircle = {
  proto: Button,
  round: 42,
  theme: 'circle',
  style: {
    width: '32px',
    height: '32px',
  }
}

export const buttonSquare = { 
  proto: Button,
  round: 42,
  text: '3',
  theme: 'secondary',
  style: {
    fontSize: '2em',
    width: `${42 / 20}em`,
    height: '42px'
  }
}

export const buttonRectangle = {
  proto: [ Button, IconText, Direction ],
  round: 26,
  theme: 'green',
  style: {
    padding: `0 ${26 / 16}em`
  },
  _icon: {},
  icon: 'checkMedium',
  text: 'Join the Classroom'
}

export const buttonUser = {
  proto: [Button],
  round: 26,
  style: { 
    fontSize: '1em',
    padding: 0,
    paddingLeft: '.8em',
    paddingRight: '2.6em',
    height: '42px'
  },
  childProto: userBundle,
  ...[
    {
      users: {
        style: {paddingRight: '18px'},
        ...[{}, {}, {}]
      },
      span: 'View all Contacts'
    }
  ]
}


export default Button


