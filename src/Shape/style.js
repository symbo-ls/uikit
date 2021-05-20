'use strict'

import { Unit } from '@rackai/scratch'

export default {
  boxSizing: 'border-box'
}

export const depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${Unit} 4${Unit}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${Unit} 6${Unit}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${Unit} 10${Unit}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${Unit} 16${Unit}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${Unit} 26${Unit}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${Unit} 42${Unit}` }
}

export const toolTipShape = {
  top: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0px',
      height: '0px',
      border: '6px solid white',
      borderRadius: '2px',
      position: 'absolute',
      top: '2px',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  },
  right: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0px',
      height: '0px',
      border: '6px solid white',
      borderRadius: '2px',
      position: 'absolute',
      top: '50%',
      right: '-10px',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  },
  bottom: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0px',
      height: '0px',
      border: '6px solid white',
      borderRadius: '2px',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  },
  left: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0px',
      height: '0px',
      border: '6px solid white',
      borderRadius: '2px',
      position: 'absolute',
      top: '50%',
      left: '2px',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  }
}

export const tagShape = {
  top: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      background: 'white',
      border: '16px solid white',
      borderRadius: '6px',
      position: 'absolute',
      top: '5px',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  },
  right: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      background: 'white',
      border: '16px solid white',
      borderRadius: '6px',
      position: 'absolute',
      top: '50%',
      left: '37px',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  },
  bottom: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      background: 'white',
      border: '16px solid white',
      borderRadius: '6px',
      position: 'absolute',
      bottom: '-27px',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  },
  left: {
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      background: 'white',
      border: '16px solid white',
      borderRadius: '6px',
      position: 'absolute',
      top: '50%',
      left: '5px',
      transform: 'translate(-50%, -50%) rotate(45deg)'
    }
  }
}

export const shape = {
  rectangle: {},
  circle: { borderRadius: '100%' },
  bubble: {},
  tooltip: {
    background: 'red'
  }
}
