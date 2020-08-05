'use strict'

export default {
  tag: 'img',
  define: {
    src: param => param,
    alt: param => param || '',
    title: param => param || ''
  },
  attr: {
    src: element => element.src,
    alt: element => element.alt,
    title: element => element.title || element.alt
  }
}
