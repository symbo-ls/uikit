'use strict'

export const Form = {
  tag: 'form',
  props: {},
  attr: {
    action: ({ props }) => props.action,
    method: ({ props }) => props.method,
    enctype: ({ props }) => props.enctype
  }
}
