'use strict'

export default {
  maxWidth: `${336 / 16}em`,
  maxHeight: `${260 / 16}em`,
  display: 'flex',
  padding: '0 1em',
  boxSizing: 'border-box',
  borderRadius: '10px',
  button: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    cursor: 'pointer'
  },

  aside: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'auto',
    paddingRight: `${10 / 16}em`,

    button: {
      opacity: 0.5,
      marginBottom: `${22 / 12}em`
    }
  },

  main: {
    flex: 1,
    paddingTop: `${14 / 16}em`,
    paddingBottom: `${10 / 16}em`,
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'column',

    '> header': {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      overflow: 'hidden',
      width: '100%',
      padding: `0 ${8 / 16}em ${14 / 16}em ${8 / 16}em`,
      boxSizing: 'border-box'
    },
    '> header > svg': {
      cursor: 'pointer'
    },

    '> header > div': {
      display: 'flex',
      overflow: 'hidden',
      flex: 1
    },
    '> header span': {
      minWidth: '100%',
      textTransform: 'capitalize',
      textAlign: 'center',
      fontWeight: 'bold'
    },

    section: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    'section > header': {
      height: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '6px',
      paddingBottom: `${2 / 16}em`
    },
    'section > header span': {
      textAlign: 'center',
      fontWeight: 'bold'
    },
    'section > header span:nth-child(6)': {
      opacity: 0.5
    },
    'section > header span:nth-child(7)': {
      opacity: 0.5
    },
    'section > div': {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '6px'
    },
    'section > div button': {
    },
    'section > div button:nth-child(7n)': {
      opacity: 0.5
    },
    'section > div button:nth-child(7n - 1)': {
      opacity: 0.5
    }
  }
}
