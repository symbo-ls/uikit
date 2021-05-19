'use strict'

import { hexToRGBA } from '@rackai/scratch'

export const styleRangeSlider = {
  appearance: 'none',
  width: '70px',
  height: '2px',
  outline: 'none',
  marginRight: '8px',
  flex: 1,

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

export const styleSelect = {
  width: '100%',
  height: '100%',
  outline: 'none',
  border: 'none',
  appearance: 'none',
  boxSizing: 'border-box',
  paddingLeft: '8px',
  fontSize: '14px',
  cursor: 'pointer'
}
