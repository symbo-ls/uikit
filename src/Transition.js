'use strict'

import { getTimingByKey } from '@symbo.ls/scratch'

const transformTransition = transition => {
  const arr = transition.split(' ')

  if (!arr.length) return transition

  return arr.map(v => {
    if (v.length < 3 || v.includes('ms')) {
      const mapWithSequence = getTimingByKey(v)
      return mapWithSequence.duration
    }
    return v
  }).join(' ')
}

const splitTransition = transition => {
  const arr = transition.split(',')
  if (!arr.length) return
  return {
    transition: arr.map(transformTransition).join(',')
  }
}

export const Transition = {
  class: {
    transition: ({ props }) => props.transition && splitTransition(props.transition),
    transitionProperty: ({ props }) => props.transitionProperty && ({
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    })
  }
}
