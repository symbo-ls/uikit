'use strict'

export default {
  maxWidth: '33.6em',
  maxHeight: '26em',
  display: 'flex',
  overflow: 'hidden',
  background: 'white',
  paddingLeft: '1.6em',
  padding: '0 1.6em',
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
    paddingRight: '1em',

    button: {
      // fontSize: '1.2em',
      color: 'rgba(0, 0, 0, .5)',
      marginBottom: `${22 / 12}em`
    }
  },

  main: {
    flex: 1,
    paddingTop: '1.4em',
    paddingBottom: '1em',
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'column',

    '> header': {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      overflow: 'hidden',
      width: '100%',
      padding: '0 .8em 1.4em .8em',
      boxSizing: 'border-box'
    },
    '> header > svg': {
      // fontSize: '1.2em',
      color: '#11B9DC',
      cursor: 'pointer'
    },

    '> header > div': {
      display: 'flex',
      overflow: 'hidden',
      flex: 1
    },
    '> header span': {
      // fontSize: '1.4em',
      minWidth: '100%',
      textTransform: 'capitalize',
      textAlign: 'center',
      color: 'black',
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
      paddingBottom: '.2em'
    },
    'section > header span': {
      // fontSize: '10px',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold'
    },
    'section > header span:nth-child(6)': {
      color: 'rgba(0, 0, 0, .5)'
    },
    'section > header span:nth-child(7)': {
      color: 'rgba(0, 0, 0, .5)'
    },
    'section > div': {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '6px'
    },
    'section > div button': {
      // fontSize: '1.3em'
    },
    'section > div button:nth-child(7n)': {
      color: 'rgba(0, 0, 0, .5)'
    },
    'section > div button:nth-child(7n - 1)': {
      color: 'rgba(0, 0, 0, .5)'
    }
  }
}
