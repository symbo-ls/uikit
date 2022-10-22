'use strict'

import { getSystemTheme } from './Theme' // eslint-disable-line no-unused-vars

export const Picture = {
  tag: 'picture',

  childExtend: {
    tag: 'source',
    attr: {
      media: element => {
        const { props, key, context } = element
        const { MEDIA } = context.SYSTEM
        // getSystemTheme(element)
        return MEDIA[(props.media || key).slice(1)]
      },
      srcset: ({ props }) => props.srcset
    }
  },

  Img: ({ props }) => ({ src: props.src })
}
