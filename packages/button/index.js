'use strict'

import { IconText } from '@symbo.ls/icon-text'

const css = {
  appearance: 'none',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  fontFamily: 'inherit'
}

export const Button = {
  extends: IconText,
  tag: 'button',
  props: {
    type: 'button',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    css
  },
  attr: {
    type: ({ props }) => props.type
  }
}

export const SquareButton = {
  extends: Button,
  props: {
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    justifyContent: 'center',
    round: 'Z',
    css: { boxSizing: 'content-box' }
  }
}

export const CircleButton = {
  extends: SquareButton,
  props: { round: 'C' }
}

export const KangorooButton = {
  tag: 'button',
  props: { css },

  iconText: { extends: IconText },
  child: { extends: IconText }
}
