'use strict'

export const styleUser = {
  cursor: 'pointer',
  width: '1.618em',
  height: '1.618em',
  borderRadius: '100%'
}

export const styleUserBundle = {
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  '> div': {
    display: 'flex',
    marginRight: '1em',
    '> img': {
      marginRight: '-0.5em'
    }
  }
}
