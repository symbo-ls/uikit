'use strict'

import { getSpacingBasedOnRatio } from '@symbo.ls/scratch'

export const Grid = {
  props: { display: 'grid' },

  class: {
    area: ({ props }) => props.area ? ({ gridArea: props.area }) : null,
    template: ({ props }) => props.template ? ({ gridTemplate: props.template }) : null,
    templateAreas: ({ props }) => props.templateAreas ? ({ gridTemplateAreas: props.templateAreas }) : null,

    column: ({ props }) => props.column ? ({ gridColumn: props.column }) : null,
    columns: ({ props }) => props.columns ? ({ gridTemplateColumns: props.columns }) : null,
    templateColumns: ({ props }) => props.templateColumns ? ({ gridTemplateColumns: props.templateColumns }) : null,
    autoColumns: ({ props }) => props.autoColumns ? ({ gridAutoColumns: props.autoColumns }) : null,
    columnStart: ({ props }) => props.columnStart ? ({ gridColumnStart: props.columnStart }) : null,

    row: ({ props }) => props.row ? ({ gridRow: props.row }) : null,
    rows: ({ props }) => props.rows ? ({ gridTemplateRows: props.rows }) : null,
    templateRows: ({ props }) => props.templateRows ? ({ gridTemplateRows: props.templateRows }) : null,
    autoRows: ({ props }) => props.autoRows ? ({ gridAutoRows: props.autoRows }) : null,
    rowStart: ({ props }) => props.rowStart ? ({ gridRowStart: props.rowStart }) : null,

    autoFlow: ({ props }) => props.autoFlow ? ({ gridAutoFlow: props.autoFlow }) : null,

    columnGap: ({ props }) => props.columnGap ? getSpacingBasedOnRatio(props, 'columnGap') : null,
    rowGap: ({ props }) => props.rowGap ? getSpacingBasedOnRatio(props, 'rowGap') : null
  }
}
