'use strict'

import { Shape, IconText, Direction, User, Icon } from '../'
import { userBundle } from '../User'

import style from './style'

const Button = {
  tag: 'button',
  proto: Shape,
  style
}
export const buttonCircle = {
  proto: Button,
  round: 42,
  define: {
    icon: param => param
  },
  style: {
    width: '42px',
    height: '42px',
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  _icon: { proto: Icon, name: el => el.parent.icon }
}

export const buttonSquare = {
  proto: Button,
  define: {
    icon: param => param
  },
  round: 16,
  style: {
    fontSize: '2em',
    width: `${42 / 20}em`,
    height: `${42 / 20}em`
  },
  _icon: { proto: Icon, name: el => el.parent.icon }
}

export const buttonRectangle = {
  proto: [Button, IconText, Direction],
  round: 26,
  style: {
    padding: `0 ${26 / 16}em`
  },
  _icon: {},
  icon: '',
  text: ''
}
export const buttonPlus = {
  proto: buttonCircle,
  theme: 'greyBlue',
  icon: 'checkMedium'
}

export const buttonMore = {
  proto: buttonCircle,
  theme: 'transparent',
  icon: 'checkMedium'
}

export const buttonUser = {
  proto: [Button],
  round: 26,
  style: {
    fontSize: '1em',
    padding: 0,
    paddingLeft: '.8em',
    paddingRight: '2.6em',
    height: '42px',
    img: { border: '1px solid white' }
  },
  childProto: userBundle,
  ...[
    {
      users: {
        ...[{}, {}, {}]
      },
      span: 'View all Contacts'
    }
  ]
}

export default Button
