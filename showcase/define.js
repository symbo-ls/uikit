'use strict'

import DOM from '@rackai/domql'
import { isObjectLike, exec } from '@rackai/domql/src/utils'
import { classList } from '@rackai/domql/src/element/mixins'

import { css } from 'emotion'

const style = (params, element, node) => {
  if (params) {
    if (isObjectLike(element.class)) element.class.style = params
    else element.class = { style: params }
  }
  classf(element.class, element, node)
}

const classf = (params, element, node) => {
  if (isObjectLike(params)) {
    const classObjHelper = {}
    for (const key in params) {
      var prop = exec(params[key], element)
      var CSSed = css(prop)
      classObjHelper[key] = CSSed
    }
    classList(classObjHelper, element, node)
  }
}

DOM.define({
  style,
  class: classf
}, {
  overwrite: true
})
