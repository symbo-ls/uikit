'use strict'

import { Shape } from '@symbo.ls/shape'
import { Icon } from '@symbo.ls/icon'
import { UserBundle } from '@symbo.ls/user'

import { styleParentMode } from './style'

export const ParentMode = {
  proto: Shape,
  round: 10,
  theme: 'purple',
  style: styleParentMode,
  icon: {
    proto: Icon,
    props: { icon: 'checkMedium' }
  },
  h2: 'Welcome to parent Mode',
  description: {
    proto: UserBundle,
    users: { ...[{}, {}, {}] },
    span: 'You’ll now be able to chat with tutor privately. No other participants will see the messages.'
  }
}
