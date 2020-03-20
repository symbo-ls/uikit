'use strict'

import method from './methods/create'
import config from './config'
import base from './base'

export default { ...base, ...method, ...config }
