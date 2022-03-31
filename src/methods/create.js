'use strict'

import base from '../base'

const create = (what, params, preset) => {
  base[what] = preset(params)
}

export default { create }
