'use strict'

import { IconText } from '@symbo.ls/icon-text'

export const Button = {
  extends: IconText,
  tag: 'button',
  props: {
    type: 'button'
  },
  attr: {
    type: ({ props }) => props.type
  },

  on: {
    click: (event, { key, value, props }) => {
      props.onClick && props.onClick(event)
    }
  }
}

export const SquareButton = {
  extends: Button,
  props: {
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    round: 'Z'
  },
  class: {
    squareButton: {
      justifyContent: 'center',
      boxSizing: 'content-box'
    }
  }
}

export const CircleButton = {
  extends: SquareButton,
  props: { round: 'C' }
}

export const KangorooButton = {
  tag: 'button',
  iconText: { extends: IconText },
  child: { extends: IconText }
}
