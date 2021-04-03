'use strict'

export const styleUser = {
  cursor: 'pointer',
  width: '26px',
  height: '26px',
  borderRadius: '100%',
  cursor: 'pointer'
}

export const styleUserBundle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.4em',
  textTransform: 'capitalize',
  '> div': {
    display: 'flex',
    marginRight: '16px',
    '> img': {
      marginRight: '-8px'
    }
  },
  span: { opacity: '.6' }
}