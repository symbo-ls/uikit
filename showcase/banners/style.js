'use strict'

export const styleBannerPurple = {
  boxSizing: 'border-box',
  padding: '3.6em 1.6em 4em 3.6em',
  position: 'relative',
  '> svg': {
    position: 'absolute',
    top: '1.2em',
    right: '1.2em',
    color: 'rgba(215, 100, 185, .2)'
  },
  '> div': {
    display: 'flex'
  },
  h2: {
    fontSize: '2em',
    margin: 0,
    marginBottom: '10px'
  },
  p: {
    fontSize: '1.4em',
    maxWidth: '24em',
    opacity: '.5',
    margin: 0,
    marginLeft: `${6 / 14}em`,
    lineHeight: '22px'
  },
  img: {
    width: '2.6em',
    height: '2.6em',
    borderRadius: '100%',
    '&:nth-child(2)': {
      position: 'absolute',
      top: 0,
      left: '15px'
    }
  }
}