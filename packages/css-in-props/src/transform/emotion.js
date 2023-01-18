'use strict'

import { isFunction } from '@domql/utils'
import createEmotion from '@emotion/css/create-instance'

const { css } = createEmotion({
  key: 'smbls'
})

export const transformEmotion = (props, callback) => isFunction(callback) ? callback(props) : css(props)
