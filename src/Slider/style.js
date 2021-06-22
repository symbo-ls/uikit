'use strict'

export default {
  fontSize: '1em',
  appearance: 'none',
  maxWidth: '8.2em',
  height: '.2em',
  outline: 'none',
  marginRight: '.9em',
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
