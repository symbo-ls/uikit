'use strict'

export const Picture = {
  tag: 'picture',

  childExtend: {
    tag: 'source',
    attr: {
      media: ({ props, key, context }) => {
        const { MEDIA } = context.SYSTEM
        return MEDIA[(props.media || key).slice(1)]
      },
      srcset: ({ props }) => props.srcset
    }
  },

  Img: ({ props }) => ({ src: props.src })
}
