'use strict'

import DOM from 'domql'
import { isObject } from 'domql/src/utils'
import { classList, exec } from 'domql/src/element/params'

import { css } from 'emotion'

DOM.define({
  style: (params, element, node) => {
    if (params) {
      if (isObject(element.class)) element.class.style = params
      else element.class = { style: params }
    }
  },
  class: (params, element, node) => {
    if (isObject(params)) {
      for (const param in params) {
        var prop = exec(params[param], element)
        var CSSed = css(prop)
        element.class[param] = CSSed
      }
      classList(element.class, element, node)
    }
  }
}, {
  overwrite: true
})
