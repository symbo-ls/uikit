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
export const styleRangeSliderTool = {
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  maxHeight: '28px',
  span: {
    textAlign: 'center',
    marginLeft: '2px'
  }
}

export default {
  '> div': {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    boxSizing: 'border-box',
    padding: '.4em',
    background: 'rgba(255, 255, 255, .06)'
  },
  button: {
    width: '20px',
    height: '20px',
    background: 'rgba(255, 255, 255, .06)',
    color: 'rgba(255, 255, 255, .55)'
  },
  span: {
    fontSize: '1.3em'
  }
}
