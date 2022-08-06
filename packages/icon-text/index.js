'use strict'

import { Box } from '@symbo.ls/box'
import { Icon } from '@symbo.ls/icon'

export const IconText = {
  extends: [Box],
  props: {
    flexAlign: 'center center',
    display: 'flex',
    lineHeight: 1
  },

  icon: { extends: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
