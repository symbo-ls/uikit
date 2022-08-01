'use strict'

import { transformClassname, transformEmotion } from './transform'

export const setClassname = (props, emotionCss) => {
  const transform = transformClassname(props)
  return transformEmotion(transform, emotionCss)
}
