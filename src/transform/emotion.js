'use strict'

import createEmotion from '@emotion/css/create-instance'
// const ENV = process.env.NODE_ENV

export const {
  flush,
  hydrate,
  cx,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache
} = createEmotion({
  key: 'smbls'
})

export const transformEmotion = props => css(props)
