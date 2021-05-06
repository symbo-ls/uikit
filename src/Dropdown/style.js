'use strict'

export const styleDropDown = {
  listStyleType: 'none',
  background: 'white',
  padding: '4px',
  maxHeight: '17.6em'
}

export const styleRow = {
  fontSize: '1.6em',
  height: `${42 / 16}em`,
  width: `${178 / 16}em`,
  position: 'relative',
  color: 'black',
  padding: 0,
  span: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    margin: '0 6px',
    svg: { display: 'none' }
  },
  '&:not(:last-child) > span': {
    borderBottom: '.5px solid rgba(0, 0, 0, .12)'
  }
}

export const styleRowActive = {
  background: 'rgba(200, 236, 250, 1)',
  borderRadius: '6px',
  '&:not(:last-child) > span': {
    borderBottom: 'none'
  },
  'span > svg': { display: 'inline' }
}

export const styleSelectDropdown = {
  color: 'red'
}
