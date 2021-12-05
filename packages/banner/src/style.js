'use strict'

export const styleParentMode = {
  boxSizing: 'border-box',
  padding: '3.6em 1.6em 4em 3.6em',
  position: 'relative',
  display: 'block',
  width: '700px',
  '> svg': {
    position: 'absolute',
    top: '1.2em',
    right: '1.2em',
    color: 'rgba(215, 100, 185, .2)'
  },
  '> div': {
    alignItems: 'flex-start',
    '> div': { marginTop: '4px' }
  },
  h2: {
    margin: 0,
    marginBottom: '10px'
  },
  span: {
    maxWidth: `${314 / 14}em`,
    lineHeight: '22px'
  }
}
