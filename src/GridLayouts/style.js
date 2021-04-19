'use strict'

export const styleGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
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
    borderRadius: '12px'
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

export const styleGrid2 = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  boxSizing: 'border-box',
  marginBottom: '2em',
  gap: '10px',
  gridAutoColumns: 'auto',
  gridAutoRows: 'auto',
  gridAutoFlow: 'column',
  '> a': {
    padding: '70px 0',
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, .05)',
    borderRadius: '12px'
  },
  '> a:first-child': {
    gridColumn: '1 / span 3',
    gridRow: '1'
  },
  '> a:nth-child(2)': {
    gridColumn: '4 / span 5',
    gridRow: '1'
  },
  '> a:nth-child(3)': {
    gridColumn: '9 / span 7',
    gridRow: '1'
  },
  '> a:nth-child(4)': {
    gridRow: '2',
    gridColumn: '1 / span 5'
  },
  '> a:nth-child(5)': {
    gridRow: '2 / span 2',
    gridColumn: '6 / span 6'
  },
  '> a:nth-child(6)': {
    gridRow: 2,
    gridColumn: '12 / span 4'
  },
  '> a:nth-child(7)': {
    gridRow: 3,
    gridColumn: '12 / span 4'

  },
  '> a:nth-child(8)': {
    gridRow: 3,
    gridColumn: '1 / span 5'
  },
  '> a:nth-child(9)': {
    gridRow: '4 / span 2',
    gridColumn: '1 / span 6'
  },
  '> a:nth-child(10)': {
    gridColumn: '7 / span 5'
  },
  '> a:nth-child(11)': {
    gridRow: '5',
    gridColumn: '7 / span 5'
  },
  '> a:nth-child(12)': {
    gridColumn: '12 / span 4'
  }
}
