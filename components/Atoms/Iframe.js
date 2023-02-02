'use strict'

export const Iframe = {
  tag: 'iframe',
  props: {
    position: 'relative',
    minWidth: 'H',
    minHeight: 'H'
  },
  attr: {
    src: ({ props }) => props.src,
    loading: ({ props }) => props.loading,
    allowfullscreen: ({ props }) => props.allowfullscreen,
    referrerpolicy: ({ props }) => props.referrerpolicy
  }
}
