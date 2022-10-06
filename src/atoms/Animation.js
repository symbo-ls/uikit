'use strict'

import { merge } from '@domql/utils'
import { getTimingFunction } from '@symbo.ls/scratch'
import { convertPropsToClass } from './Media'
import { transformDuration } from './Timing'

const applyAnimationProps = (key, props, result, element) => {
  const { ANIMATION } = element.context && element.context.SYSTEM
  const mediaName = ANIMATION[key.slice(1)]
  const generatedClass = convertPropsToClass(props, result, element)

  const rootState = element.__root ? element.__root.state : element.state
  const { globalTheme } = rootState
  const name = key.slice(1)
  const isTheme = ['dark', 'light'].includes(name)
  const matchesGlobal = name === globalTheme

  if (globalTheme && isTheme) {
    if (matchesGlobal) return merge(result, generatedClass)
    return
  }

  const mediaKey = `@media screen and ${mediaName}`
  result[mediaKey] = generatedClass
  return result[mediaKey]
}

export const Animation = {
  class: {
    animation: ({ props }) => props.animation && ({
      animation: applyAnimationProps(props.animation)
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
