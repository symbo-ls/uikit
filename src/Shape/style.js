'use strict'

import { UNIT, getColor, getTheme } from '@symbo.ls/scratch'

export default {
  boxSizing: 'border-box'
}

export const depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${UNIT.default} 4${UNIT.default}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${UNIT.default} 6${UNIT.default}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${UNIT.default} 10${UNIT.default}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${UNIT.default} 16${UNIT.default}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${UNIT.default} 26${UNIT.default}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${UNIT.default} 42${UNIT.default}` }
}

export const SHAPES = {
  rectangle: {},
  circle: { borderRadius: '100%' },
  bubble: {},

  tooltip: ({ props }) => ({
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0px',
      height: '0px',
      border: `6px solid ${getColor(props.background) || (props.theme && getTheme(props.theme).backgroundColor)}`,
      position: 'absolute',
      borderRadius: '2px'
    }
  }),

  tooltipDirection: {
    top: {
      '&:before': {
        top: '2px',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },
    right: {
      '&:before': {
        top: '50%',
        right: '-10px',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },
    bottom: {
      '&:before': {
        bottom: '-10px',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },
    left: {
      '&:before': {
        top: '50%',
        left: '2px',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    }
  },

  tag: ({ props }) => ({
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      border: `16px solid ${getColor(props.background) || (props.theme && getTheme(props.theme).backgroundColor)}`,
      borderRadius: '6px',
      position: 'absolute'
    }
  }),

  tagDirection: {
    top: {
      '&:before': {
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, 60%) rotate(45deg)'
      }
    },
    right: {
      '&:before': {
        top: '50%',
        left: '100%',
        transform: 'translate(-60%, -50%) rotate(45deg)'
      }
    },
    bottom: {
      '&:before': {
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, -60%) rotate(45deg)'
      }
    },
    left: {
      '&:before': {
        top: '50%',
        right: '100%',
        transform: 'translate(60%, -50%) rotate(45deg)'
      }
    }
  }
}
