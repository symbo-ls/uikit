'use strict'

export default {
  appearance: 'none',
  width: '100%',
  height: '2px',
  outline: 'none',
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
