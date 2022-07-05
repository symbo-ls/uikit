'use strict'

import { Icon } from '../Icon'

export const IconText = {
  props: {
    flexAlign: 'center flex-start',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    lineHeight: 1
  },

  icon: { proto: Icon, if: ({ parent }) => parent.props.icon, props: ({ parent }) => ({ icon: parent.props.icon }) },

  text: ({ props }) => props.text
}
