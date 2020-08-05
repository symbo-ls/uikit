'use strict'

export default {
  tag: 'img',
  define: { src: param => param },
  attr: {
    src: element => element.src
  }
}
