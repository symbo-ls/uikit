'use strict'

import { isArray, isObject } from '@domql/utils'
import { getColor, getSpacingByKey, getTheme, SPACING, getFontSizeByKey, getFontFamily, FONT_FAMILY } from '@symbo.ls/scratch'

export const mapBasedOnRatio = (props, prop, unit) => {
  const { spacingRatio } = props
  const val = props[prop]
  // TODO: move this to getSpacingByKey
  if (spacingRatio) {
    const params = SPACING[spacingRatio]

    if (!params) {
      SPACING[spacingRatio] = {
        base: SPACING.base,
        type: 'spacing',
        ratio: spacingRatio,
        range: [-5, +7],
        subSequence: true,
        sequence: {},
        scales: {}
      }
    }

    return getSpacingByKey(val, prop, params, unit)
  }
  return getSpacingByKey(val, prop, null, unit)
}

const isBorderStyle = str =>
  ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial'].some(v => str.includes(v))

const diffBorder = (border, key = 'border') => {
  const obj = {}
  const arr = isObject(border) ? Object.values(border) : isArray(border) ? border : border.split(', ')
  arr.map(v => {
    if (v.includes('px')) obj[`${key}Width`] = v // TODO: add map spacing
    else if (isBorderStyle(v)) obj[`${key}Style`] = v || 'solid'
    else if (getColor(v)) obj[`${key}Color`] = getColor(v)
  })
  return obj
}

const diffStroke = stroke => {
  const WebkitTextStroke = stroke.split(', ').map(v => {
    if (v.includes('px')) return v
    else if (getColor(v)) return getColor(v)
  }).join(' ')
  return { WebkitTextStroke }
}

export const grid = {
  columns: props => props.columns ? ({ gridTemplateColumns: props.columns }) : null,
  rows: props => props.rows ? ({ gridTemplateRows: props.rows }) : null,
  area: props => props.area ? ({ gridArea: props.area }) : null,
  template: props => props.template ? ({ gridTemplate: props.template }) : null,
  templateAreas: props => props.templateAreas ? ({ gridTemplateAreas: props.templateAreas }) : null,
  gap: props => props.gap ? mapBasedOnRatio(props, 'gap') : null,
  columnGap: props => props.template ? mapBasedOnRatio(props, 'columnGap') : null,
  rowGap: props => props.template ? mapBasedOnRatio(props, 'rowGap') : null
}

export const theme = {
  theme: props => props.theme ? getTheme(props.theme) : null,

  color: props => props.color ? ({ color: getColor(props.color) }) : null,
  background: props => props.background ? ({ background: getColor(props.background) }) : null,

  textStroke: props => props.textStroke ? diffStroke(props.textStroke) : null,

  border: props => props.border ? diffBorder(props.border) : null,
  borderColor: props => props.borderColor ? ({ borderColor: getColor(props.borderColor) }) : null,
  borderStyle: props => props.borderStyle && ({ borderStyle: props.borderStyle }),

  borderLeft: props => props.borderLeft ? diffBorder(props.borderLeft, 'borderLeft') : null,
  borderTop: props => props.borderTop ? diffBorder(props.borderTop, 'borderTop') : null,
  borderRight: props => props.borderRight ? diffBorder(props.borderRight, 'borderRight') : null,
  borderBottom: props => props.borderBottom ? diffBorder(props.borderBottom, 'borderBottom') : null,

  opacity: props => props.opacity && ({ opacity: props.opacity }),
  visibility: props => ({ visibility: props.visibility })
}

export const block = {
  round: props => props.round ? (mapBasedOnRatio(props, 'borderRadius') || ({ borderRadius: props.round })) : null,
  borderRadius: props => props.borderRadius ? (mapBasedOnRatio(props, 'borderRadius') || ({ borderRadius: props.borderRadius })) : null,

  transition: props => props.transition && ({ transition: props.transition }),
  transitionProperty: props => props.transitionProperty && ({
    transitionProperty: props.transitionProperty,
    willChange: props.transitionProperty
  }),

  boxSizing: props => props.boxSizing ? ({ display: props.boxSizing }) : {
    boxSizing: 'border-box'
  },

  display: props => props.display && ({ display: props.display }),

  hide: props => props.hide && ({ display: 'none' }),

  width: props => props.width && mapBasedOnRatio(props, 'width'),
  height: props => props.height && mapBasedOnRatio(props, 'height'),
  boxSize: props => {
    if (typeof props.boxSize !== 'string') return
    const [height, width] = props.boxSize.split(' ')
    return {
      ...mapBasedOnRatio({ height, spacingRatio: props.spacingRatio }, 'height'),
      ...mapBasedOnRatio({ width, spacingRatio: props.spacingRatio }, 'width')
    }
  },

  maxWidth: props => props.maxWidth && mapBasedOnRatio(props, 'maxWidth'),
  minWidth: props => props.minWidth && mapBasedOnRatio(props, 'minWidth'),
  widthRange: props => {
    if (typeof props.widthRange !== 'string') return
    const [minWidth, maxWidth] = props.widthRange.split(' ')
    return {
      ...mapBasedOnRatio({ minWidth, spacingRatio: props.spacingRatio }, 'minWidth'),
      ...mapBasedOnRatio({ maxWidth, spacingRatio: props.spacingRatio }, 'maxWidth')
    }
  },

  maxHeight: props => props.maxHeight && mapBasedOnRatio(props, 'maxHeight'),
  minHeight: props => props.minHeight && mapBasedOnRatio(props, 'minHeight'),
  heightRange: props => {
    if (typeof props.heightRange !== 'string') return
    const [minHeight, maxHeight] = props.heightRange.split(' ')
    return {
      ...mapBasedOnRatio({ minHeight, spacingRatio: props.spacingRatio }, 'minHeight'),
      ...mapBasedOnRatio({ maxHeight, spacingRatio: props.spacingRatio }, 'maxHeight')
    }
  },

  aspectRatio: props => props.aspectRatio && ({ aspectRatio: props.aspectRatio }),

  borderWidth: props => props.borderWidth ? mapBasedOnRatio(props, 'borderWidth') : null,

  padding: props => props.padding ? mapBasedOnRatio(props, 'padding') : null,
  margin: props => props.margin ? mapBasedOnRatio(props, 'margin') : null,

  gap: props => props.gap ? mapBasedOnRatio(props, 'gap') : null,
  gridArea: props => props.gridArea && ({ gridArea: props.gridArea })
}

export const flex = {
  flexFlow: props => props.flexFlow && ({
    display: 'flex',
    flexFlow: props.flexFlow
  }),
  flexAlign: props => {
    if (typeof props.flexAlign !== 'string') return
    const [alignItems, justifyContent] = props.flexAlign.split(' ')
    return {
      display: 'flex',
      alignItems: alignItems,
      justifyContent: justifyContent
    }
  },

  flex: props => props.flex && ({ flex: props.flex }),
  alignItems: props => props.alignItems && ({ alignItems: props.alignItems }),
  alignContent: props => props.alignContent && ({ alignContent: props.alignContent }),
  justifyContent: props => props.justifyContent && ({ justifyContent: props.justifyContent })
}

export const position = {
  position: props => props.position && ({ position: props.position }),
  inset: props => {
    const { inset } = props
    if (typeof inset !== 'string') return
    return { inset: inset.split(' ').map(v => mapBasedOnRatio(v, 'k').k).join(' ') }
  },

  left: props => mapBasedOnRatio(props, 'left'),
  top: props => mapBasedOnRatio(props, 'top'),
  right: props => mapBasedOnRatio(props, 'right'),
  bottom: props => mapBasedOnRatio(props, 'bottom')
}

export const text = {
  fontSize: props => props.fontSize ? getFontSizeByKey(props.fontSize) : null,
  fontFamily: props => props.fontFamily && ({ fontFamily: getFontFamily(FONT_FAMILY, props.fontFamily) || props.fontFamily }),
  lineHeight: props => props.lineHeight && ({ lineHeight: props.lineHeight }),
  // lineHeight: props => props.lineHeight && mapBasedOnRatio(props, 'lineHeight', null, ''),
  textDecoration: props => props.textDecoration && ({ textDecoration: props.textDecoration }),
  textTransform: props => props.textTransform && ({ textTransform: props.textTransform }),
  textAlign: props => props.textAlign && ({ textAlign: props.textAlign }),
  fontWeight: props => props.fontWeight && ({ fontWeight: props.fontWeight })
}

export const registry = {
  style: props => props.style,

  ...theme,
  ...block,
  ...flex,
  ...position,
  ...text,

  gridColumn: props => props.gridColumn && ({ gridColumn: props.gridColumn }),
  gridRow: props => props.gridRow && ({ gridRow: props.gridRow }),

  size: props => {
    if (typeof props.heightRange !== 'string') return
    const [minHeight, maxHeight] = props.heightRange.split(' ')
    return {
      ...getSpacingByKey(minHeight, 'minHeight'),
      ...getSpacingByKey(maxHeight, 'maxHeight')
    }
  },

  overflow: props => props.overflow && ({ overflow: props.overflow }),

  transform: props => props.transform && ({ transform: props.transform })
}
