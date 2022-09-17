'use strict'

import { IconText } from '.'

const style = {
  appearance: 'none',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  '& > *': {
    pointerEvents: 'none'
  }
}

export const Button = {
  extend: IconText,
  tag: 'button',
  props: {
    fontSize: 'A',
    type: 'button',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    padding: 'Z A1',
    fontFamily: 'inherit',
    round: 'C2',
    style
  },
  attr: {
    type: ({ props }) => props.type
  }
}

export const SquareButton = {
  extend: Button,
  props: {
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    justifyContent: 'center',
    round: 'Z',
    style: { boxSizing: 'content-box' }
  }
}

export const CircleButton = {
  extend: SquareButton,
  props: { round: 'C' }
}

export const KangorooButton = {
  extend: Button,

  props: {
    theme: 'quinary',
    round: 'Z2',
    padding: 'X1 X1 X1 A2',
    size: 'A',
    gap: 'A',
    transition: 'A defaultBezier',
    transitionProperty: 'background, color, opacity',

    label: {
      gap: 'X1',
      text: 'Become PRO',
      alignItems: 'center',
      fontWeight: 'bold',
      icon: {
        name: 'star',
        color: 'yellow'
      }
    },
    child: {
      theme: 'tertiary',
      round: 'Z',
      size: 'Z',
      padding: 'Z A2',
      text: '1 month free',
      opacity: '.85'
    },

    style
  },

  label: { extend: IconText },
  child: { extend: IconText }
}
