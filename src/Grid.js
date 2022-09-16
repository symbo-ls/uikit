'use strict'

import { getSpacingBasedOnRatio } from '@symbo.ls/scratch'

export const Grid = {
  props: { display: 'grid' },

  class: {
    columns: ({ props }) => props.columns ? ({ gridTemplateColumns: props.columns }) : null,
    rows: ({ props }) => props.rows ? ({ gridTemplateRows: props.rows }) : null,
    area: ({ props }) => props.area ? ({ gridArea: props.area }) : null,
    template: ({ props }) => props.template ? ({ gridTemplate: props.template }) : null,
    templateAreas: ({ props }) => props.templateAreas ? ({ gridTemplateAreas: props.templateAreas }) : null,
    columnGap: ({ props }) => props.columnGap ? getSpacingBasedOnRatio(props, 'columnGap') : null,
    rowGap: ({ props }) => props.rowGap ? getSpacingBasedOnRatio(props, 'rowGap') : null
  }
}
