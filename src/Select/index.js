'use strict'

import Shape from '../Shape'
import style from './style'

export const Select = {
  proto: Shape,
  tag: 'select',
  style,

  childProto: {
    tag: 'option',
    props: { value: '' },
    attr: { value: ({ props }) => props.value }
  }
}
