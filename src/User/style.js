'use strict'

export const styleUser = {
  cursor: 'pointer',
  width: '26px',
  height: '26px',
  borderRadius: '100%'
}

export const styleUserBundle = {
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  '> div': {
    display: 'flex',
    marginRight: '16px',
    '> img': {
      marginRight: '-8px'
    }
  }
}
