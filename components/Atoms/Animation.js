'use strict'

import { getTimingByKey, getTimingFunction } from '@symbo.ls/scratch'
import { isObject } from '@domql/utils'
import { emotion } from '@symbo.ls/create-emotion'
const { keyframes } = emotion

const applyAnimationProps = (animation, element) => {
  if (isObject(animation)) return { animationName: keyframes(animation) }
  const { ANIMATION } = element.context && element.context.system
  const record = ANIMATION[animation]
  return keyframes(record)
}

export const Animation = {
  class: {
    animation: (el) => el.props.animation && {
      animationName: applyAnimationProps(el.props.animation, el),
      animationDuration: getTimingByKey(el.props.animationDuration || 'A').timing,
      animationDelay: getTimingByKey(el.props.animationDelay || '0s').timing,
      animationTimingFunction: getTimingFunction(el.props.animationTimingFunction || 'ease'),
      animationFillMode: el.props.animationFillMode || 'both',
      animationPlayState: el.props.animationPlayState,
      animationDirection: el.props.animationDirection
    },
    animationName: (el) => el.props.animationName && {
      animationName: applyAnimationProps(el.props.animationName, el)
    },

    animationDuration: ({ props }) => props.animationDuration && ({
      animationDuration: getTimingByKey(props.animationDuration).timing
    }),
    animationDelay: ({ props }) => props.animationDelay && ({
      animationDelay: getTimingByKey(props.animationDelay).timing
    }),
    animationTimingFunction: ({ props }) => props.animationTimingFunction && ({
      animationTimingFunction: getTimingFunction(props.animationTimingFunction)
    }),
    animationFillMode: ({ props }) => props.animationFillMode && ({
      animationFillMode: props.animationFillMode
    }),
    animationPlayState: ({ props }) => props.animationPlayState && ({
      animationPlayState: props.animationPlayState
    }),
    animationIterationCount: ({ props }) => props.animationIterationCount && ({
      animationIterationCount: props.animationIterationCount || 1
    }),
    animationDirection: ({ props }) => props.animationDirection && ({
      animationDirection: props.animationDirection
    })
  }
}
