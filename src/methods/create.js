'use strict'

import base from '../base'

var create = (what, params, preset) => {
  base[what] = preset(params)
}

export default { create }
