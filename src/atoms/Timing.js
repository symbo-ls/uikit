'use strict'

import { isString } from '@domql/utils'
import { getTimingByKey, getTimingFunction } from '@symbo.ls/scratch'

export const transformTransition = transition => {
  const arr = transition.split(' ')

  if (!arr.length) return transition

  return arr.map(v => {
    if (v.slice(0, 2) === '--') return `var(${v})`
    if (v.length < 3 || v.includes('ms')) {
      const mapWithSequence = getTimingByKey(v)
      return mapWithSequence.timing || v
    }
    if (getTimingFunction(v)) return getTimingFunction(v)
    return v
  }).join(' ')
}

export const transformDuration = (duration, props, propertyName) => {
  if (!isString(duration)) return
  return duration.split(',').map(v => getTimingByKey(v).timing || v).join(',')
}

export const splitTransition = transition => {
  const arr = transition.split(',')
  if (!arr.length) return
  return arr.map(transformTransition).join(',')
}

export const Timing = {
  class: {
    transition: ({ props }) => props.transition && ({
      transition: splitTransition(props.transition)
    }),
    willChange: ({ props }) => props.willChange && ({
      willChange: props.willChange
    }),
    transitionDuration: ({ props }) => props.transitionDuration && ({
      transitionDuration: transformDuration(props.transitionDuration)
    }),
    transitionDelay: ({ props }) => props.transitionDelay && ({
      transitionDelay: transformDuration(props.transitionDelay)
    }),
    transitionTimingFunction: ({ props }) => props.transitionTimingFunction && ({
      transitionTimingFunction: getTimingFunction(props.transitionTimingFunction)
    }),
    transitionProperty: ({ props }) => props.transitionProperty && ({
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    })
  }
}
