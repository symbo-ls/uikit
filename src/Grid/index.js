'use strict'

import style from './style'

export const Grid = {
  style,

  props: {},

  class: {
    columns: ({ props }) => ({ gridTemplateColumns: props.columns }),
    rows: ({ props }) => ({ gridTemplateRows: props.rows })
  }
}
