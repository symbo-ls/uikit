'use strict'

import { getSystemTheme } from './Theme'

export const Picture = {
  tag: 'picture',

  childExtend: {
    tag: 'source',
    attr: {
      media: element => {
        const { props, key, context } = element
        const { MEDIA } = context.system
        const globalTheme = getSystemTheme(element)
        const mediaName = (props.media || key).slice(1)

        if (mediaName === globalTheme) return '(min-width: 0px)'
        else if (mediaName === 'dark' || mediaName === 'light') return '(max-width: 0px)'

        return MEDIA[mediaName]
      },
      srcset: ({ props }) => props.srcset
    }
  },

  // Img: ({ props }) => ({
  //   width: 'inherit',
  //   height: 'inherit',
  //   src: props.src
  // })
}
