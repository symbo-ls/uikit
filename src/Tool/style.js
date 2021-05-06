'use strict'

export const styleRangeSlider = {
  appearance: 'none',
  width: '7.6em',
  height: '2px',
  outline: 'none',
  marginRight: '8px',
  marginLeft: '8px',

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

export default {
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  maxHeight: '28px',
  '> svg': {
    marginRight: '12px',
    opacity: '.2'
  },
  '> div': {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    boxSizing: 'border-box',
    padding: '0 4px',
    background: 'rgba(255, 255, 255, .03)'
  },
  button: {
    width: '20px',
    height: '20px'
  },
  span: {
    fontSize: '1.3em',
    marginLeft: '10px'
  }
}
