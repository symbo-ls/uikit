'use strict'

import method from './methods'
import config from './config'

export default {
  color: {},
  theme: {},
  size: {},
  shape: {},
  ...method,
  ...config
}
