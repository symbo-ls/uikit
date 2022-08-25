'use strict'

import { Shape, Img, Icon } from '../'

import { UserBundle } from '../User'

import { styleParentMode } from './style'

export const ParentMode = {
  extend: Shape,
  round: 10,
  theme: 'purple',
  style: styleParentMode,
  icon: {
    extend: Icon,
    props: { icon: 'checkMedium' }
  },
  h2: 'Welcome to parent Mode',
  description: {
    extend: UserBundle,
    users: { ...[{}, {}, {}] },
    span: 'You’ll now be able to chat with tutor privately. No other participants will see the messages.'
  }
}
