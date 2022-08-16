'use strict'

import { mapBasedOnRatio } from './Block'

export const Grid = {
  props: { display: 'grid' },

  class: {
    columns: ({ props }) => props.columns ? ({ gridTemplateColumns: props.columns }) : null,
    rows: ({ props }) => props.rows ? ({ gridTemplateRows: props.rows }) : null,
    area: ({ props }) => props.area ? ({ gridArea: props.area }) : null,
    template: ({ props }) => props.template ? ({ gridTemplate: props.template }) : null,
    templateAreas: ({ props }) => props.templateAreas ? ({ gridTemplateAreas: props.templateAreas }) : null,
    columnGap: ({ props }) => props.columnGap ? mapBasedOnRatio(props, 'columnGap') : null,
    rowGap: ({ props }) => props.rowGap ? mapBasedOnRatio(props, 'rowGap') : null
  }
}
