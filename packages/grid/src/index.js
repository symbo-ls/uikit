'use strict'

import style from './style'
import { mapBasedOnRatio } from '@symbo-ls/block'

export const Grid = {
  style,

  props: {},

  class: {
    columns: ({ props }) => ({ gridTemplateColumns: props.columns }),
    rows: ({ props }) => ({ gridTemplateRows: props.rows }),
    gap: ({ props }) => mapBasedOnRatio(props, 'gap'),
    columnGap: ({ props }) => mapBasedOnRatio(props, 'columnGap'),
    rowGap: ({ props }) => mapBasedOnRatio(props, 'rowGap')
  }
}
