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

export const styleTool = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '.4em',
  paddingRight: '.4em',
  background: 'rgba(255, 255, 255, .06)',
  width: '18em',
  height: '2.8em',
  '> button': {
    width: '20px',
    height: '20px',
    background: 'rgba(255, 255, 255, .06)',
    color: 'rgba(255, 255, 255, .55)'
  },
  span: {
    fontSize: '1.3em'
  }
}
