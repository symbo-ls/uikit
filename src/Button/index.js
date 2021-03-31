'use strict'

import { Shape, IconText, Direction, User } from '../'
import { userBundle } from '../User'

import style from './style'

const Button = {
  proto: Shape,
  tag: 'button',
  style
}

export const squareButton = { 
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
export const rectangleButton = {
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

console.log(rectangleButton, userBundle)

export const userButton = {
  proto: [Button],
  round: 26,
  style: { 
    fontSize: '1em',
    padding: 0,
    paddingLeft: '.8em',
    paddingRight: '2.6em',
  },
  childProto: userBundle,
  ...[
    {
      users: {
        style: {paddingRight: '14px'},
        ...[{}, {}, {}]
      },
      span: 'View all Contacts'
    }
  ]
}

export default Button


