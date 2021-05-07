'use strict'

import { Unit } from '@rackai/scratch'

export default {
  boxSizing: 'border-box'
}

export const round = {
  0: { borderRadius: 0 },
  4: { borderRadius: 4 },
  6: { borderRadius: 6 },
  10: { borderRadius: 10 },
  12: { borderRadius: 12 },
  16: { borderRadius: 16 },
  26: { borderRadius: 26 },
  42: { borderRadius: 42 }
}

export const roundCornerTopLeft = {
  0: { borderTopLeftRadius: 0 },
  4: { borderTopLeftRadius: 4 },
  6: { borderTopLeftRadius: 6 },
  10: { borderTopLeftRadius: 10 },
  12: { borderTopLeftRadius: 12 },
  16: { borderTopLeftRadius: 16 },
  26: { borderTopLeftRadius: 26 },
  42: { borderTopLeftRadius: 42 }
}
export const roundCornerBottomLeft = {
  0: { borderBottomLeftRadius: 0 },
  4: { borderBottomLeftRadius: 4 },
  6: { borderBottomLeftRadius: 6 },
  10: { borderBottomLeftRadius: 10 },
  12: { bborderBottomLeftRadius: 12 },
  16: { borderBottomLeftRadius: 16 },
  26: { borderBottomtLeftRadius: 26 },
  42: { borderBottomLeftRadius: 42 }
}

export const roundCornerTopRight = {
  0: { borderTopRightRadius: 0 },
  4: { borderTopRightRadius: 4 },
  6: { borderTopRightRadius: 6 },
  10: { borderTopRightRadius: 10 },
  12: { borderTopRightRadius: 12 },
  16: { borderTopRightRadius: 16 },
  26: { borderTopRightRadius: 26 },
  42: { borderTopRightRadius: 42 }
}

export const roundCornerBottomRight = {
  0: { borderBottomRightRadius: 0 },
  4: { borderBottomRightRadius: 4 },
  6: { borderBottomRightRadius: 6 },
  10: { borderBottomRightRadius: 10 },
  12: { borderBottomRightRadius: 12 },
  16: { borderBottomRightRadius: 16 },
  26: { borderBottomRightRadius: 26 },
  42: { borderBottomRightRadius: 42 }
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
    // background: 'red',
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
