'use strict'

const PRIORITIES = {
  primary: {
    '@dark': {
      color: 'white',
      background: 'gradient-colorful'
    },
    '@light': {
      color: 'white',
      background: 'gradient-colorful'
    }
  },

  secondary: {
    '@light': {
      color: 'white',
      background: 'blue'
    },
    '@dark': {
      color: 'white',
      background: 'blue'
    }
  },

  tertiary: {
    '@light': {
      color: 'white',
      background: 'gradient-light'
    },
    '@dark': {
      color: 'white',
      background: 'gradient-dark-active'
    }
  },

  quaternary: {
    '@dark': {
      color: 'gray9',
      background: 'gradient-light',

      ':hover': {
        color: 'gray12',
        background: 'gradient-light-active'
      },
      ':active': {
        color: 'gray12',
        background: 'gradient-light-active'
      },

      '.active': {
        color: 'gray12',
        background: 'gradient-light-active'
      }
    },

    '@light': {
      color: 'gray3',
      background: 'gradient-dark',

      ':hover': {
        color: 'gray1',
        background: 'gradient-dark-active'
      },
      ':active': {
        color: 'gray1',
        background: 'gradient-dark-active'
      },

      '.active': {
        color: 'gray1',
        background: 'gradient-dark-active'
      }
    }
  }
}

export const THEME = {
  document: {
    '@light': {
      color: 'black',
      background: 'white'
    },
    '@dark': {
      color: 'white',
      background: 'black'
    }
  },

  ...PRIORITIES
}
