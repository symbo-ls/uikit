'use strict'

import { mapTiming } from '@symbo.ls/scratch'

const diffTransition = (transition, key = 'transition') => {
  const arr = transition.split(' ')

  if (!arr.length) return { transition: props.transition }

  return {
    transition: arr.map(v => {
      if (v.length < 3 || v.includes('ms')) {
        const mapWithSequence = mapTiming(v)
        return mapWithSequence.duration
      }
      return v
    }).join(' ')
  }
}

export const Transition = {
  class: {
    transition: ({ props }) => props.transition && diffTransition(props.transition),
    transitionProperty: ({ props }) => props.transitionProperty && ({
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    })
  }
}
