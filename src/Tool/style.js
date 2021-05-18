'use strict'

import { hexToRGBA } from '@rackai/scratch'

export const styleRangeSlider = {
  appearance: 'none',
  width: '7.6em',
  height: '2px',
  outline: 'none',
  marginRight: '8px',

  '&::-webkit-slider-thumb': {
    boxSizing: 'content-box',
    appearance: 'none',
    width: '8px',
    height: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '100%',
    opacity: '.8'
  }
}
