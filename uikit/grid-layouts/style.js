'use strict'

export const styleGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(15, 1fr)',
  boxSizing: 'border-box',
  padding: '0 8em',
  marginBottom: '2em',
  rowGap: '10px',
  gridAutoColumns: 'auto',
  gridAutoRows: 'auto',
  gridAutoFlow: 'column',
  '> a': {
    padding: '70px 0',
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, .05)',
    borderRadius: '12px',
    alignItems: 'center'
  },
  '> a:first-child': {
    gridColumn: '1 / span 15'
  },
  '> a:nth-child(2)': {
    gridRow: '2',
    gridColumn: '1 / span 3',
    marginRight: '10px'
  },
  '> a:nth-child(3)': {
    gridRow: '2',
    gridColumn: '4 / span 6',
    marginRight: '10px'
  },
  '> a:nth-child(4)': {
    gridRow: '2',
    gridColumn: '10 / span 15'
  },
  '> a:nth-child(5)': {
    gridRow: '3',
    gridColumn: '1 / span 6',
    marginRight: '10px'
  },
  '> a:nth-child(6)': {
    gridRow: '3',
    gridColumn: '7 / span 15'
  }
}
