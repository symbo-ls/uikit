'use strict'

import { UNIT, getColor, getTheme } from '@symbo.ls/scratch' // eslint-disable-line no-unused-vars

export const depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${UNIT.default} 4${UNIT.default}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${UNIT.default} 6${UNIT.default}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${UNIT.default} 10${UNIT.default}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${UNIT.default} 16${UNIT.default}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${UNIT.default} 26${UNIT.default}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${UNIT.default} 42${UNIT.default}` }
}

const getComputedBackgroundColor = el => {
  const { props, node } = el
  const propsColor = getColor(props.borderColor) || getColor(props.backgroundColor) || getColor(props.background)
  // const propsTheme = getTheme(props.theme)

  if (!propsColor) {
    // const computedStyle = window.getComputedStyle(node)
    // // if (props.shapeDirection) {
    // //   console.group(el.parent.parent.parent.key + ' - ' + el.parent.key)
    // //   console.log(propsTheme)
    // //   console.log(getColor(props.borderColor))
    // //   console.log(getColor(props.backgroundColor))
    // //   console.log(getColor(props.background))
    // //   console.log(computedStyle.getPropertyValue('border-color'))
    // //   console.log(computedStyle.getPropertyValue('background'))
    // //   console.log(computedStyle.getPropertyValue('background-color'))
    // //   console.log(el)
    // //   console.groupEnd(el.parent.parent.parent.key + ' - ' + el.parent.key)
    // // }
    // return computedStyle.getPropertyValue('border-color') ||
    //   computedStyle.getPropertyValue('background') ||
    //   computedStyle.getPropertyValue('background-color')
  }

  return propsColor
}

export const SHAPES = {
  rectangle: {},
  circle: { borderRadius: '100%' },
  bubble: {},

  tooltip: el => ({
    position: el.props.position || 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0px',
      height: '0px',
      border: `.35em solid`,
      borderColor: getComputedBackgroundColor(el),
      position: 'absolute',
      borderRadius: '.15em'
    }
  }),

  tooltipDirection: {
    top: {
      '&:before': {
        top: '-.1em',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },
    right: {
      '&:before': {
        top: '50%',
        right: '-.1em',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },
    bottom: {
      '&:before': {
        bottom: '-.1em',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },
    left: {
      '&:before': {
        top: '50%',
        left: '-.1em',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    }
  },

  tag: el => ({
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      border: `16px solid`,
      borderColor: getComputedBackgroundColor(el),
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
