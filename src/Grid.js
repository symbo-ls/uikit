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
    gap: ({ props }) => props.gap ? mapBasedOnRatio(props, 'gap') : null,
    columnGap: ({ props }) => props.template ? mapBasedOnRatio(props, 'columnGap') : null,
    rowGap: ({ props }) => props.template ? mapBasedOnRatio(props, 'rowGap') : null
  }
}
