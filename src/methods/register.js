'use strict'

import root from '..'
import mapTheme from '../methods/mapTheme'

var register = (kind, ...props) => {
  if (kind === 'color') {
    root['color'] = props[0]
  } else if (kind === 'theme') {
    props.map((theme, key) => {
      var { name } = theme
      if (!name) name = key
      root['theme'][name] = mapTheme(theme)
    })
  }
}

export default register
