'use strict'

import { isString } from '@domql/utils'
import { getTimingByKey, getTimingFunction } from '@symbo.ls/scratch'

export const transformTransition = transition => {
  const arr = transition.split(' ')

  if (!arr.length) return transition

  return arr.map(v => {
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
  return duration.split(',').map(getTimingByKey).join(',')
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
    }),

    animationDuration: ({ props }) => props.animationDuration && ({
      animationDuration: transformDuration(props.animationDuration)
    }),
    animationDelay: ({ props }) => props.animationDelay && ({
      animationDelay: transformDuration(props.animationDelay)
    }),
    animationTimingFunction: ({ props }) => props.animationTimingFunction && ({
      animationTimingFunction: getTimingFunction(props.animationTimingFunction)
    }),
    animationFillMode: ({ props }) => props.animationFillMode && ({
      animationFillMode: props.animationFillMode
    }),
    animationProperty: ({ props }) => props.animationProperty && ({
      animationProperty: props.animationProperty,
      willChange: props.animationProperty
    })
  }
}
