'use strict'

import DOM from '@rackai/domql'
import { isObject, exec } from '@rackai/domql/src/utils'
import { classList } from '@rackai/domql/src/element/params'

import { css } from 'emotion'

DOM.define({
  style: (params, element, node) => {
    if (params) {
      if (isObject(element.class)) element.class.style = params
      else element.class = { style: params }
    }
  },
  class: (params, element, node) => {
    var { data } = element
    if (isObject(params)) {
      if (!data.class) data.class = {}

      for (const param in params) {
        var cachedParam = data.class[param]

        if (!cachedParam) cachedParam = data.class[param] = params[param]

        var prop = exec(cachedParam, element)

        // if object is not empty
        var CSSed = ''
        if (prop && Object.keys(prop).length > 0) CSSed = css(prop)
        element.class[param] = CSSed
      }

      classList(element.class, element, node)
    }
  }
}, {
  overwrite: true
})
