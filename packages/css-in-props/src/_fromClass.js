'use strict'

const methods = {
  shape: (element) => {
    const { props } = element
    const { shape } = props
    return shape ? exec(SHAPES[shape], element) : null
  },
  shapeDirection: ({ props }) => {
    const { shape, shapeDirection } = props
    if (!shape || !shapeDirection) return
    const shapeDir = SHAPES[shape + 'Direction']
    return shape ? shapeDir[shapeDirection || 'top'] : null
  },
  shapeDirectionColor: ({ props, ...el }) => props.shapeDirection ? { '&:before': { borderColor: el.class.backgroundColor } } : null,
  depth: ({ props }) => depth[props.depth],
  round: ({ props, key, ...el }) => props.round ? (mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })) : null,
  borderRadius: ({ props, key, ...el }) => props.borderRadius ? (mapSpacing(props.borderRadius, 'borderRadius') || ({ borderRadius: props.borderRadius })) : null,

  theme: ({ props }) => {
    if (!props.theme) return
    return getTheme(props.theme)
  },

  color: ({ props }) => props.color ? ({ color: getColor(props.color) }) : null,
  background: ({ props }) => props.background ? ({ backgroundColor: getColor(props.background) }) : null,

  textStroke: ({ props }) => props.textStroke ? diffStroke(props.textStroke) : null,

  border: ({ props }) => props.border ? diffBorder(props.border) : null,
  borderColor: ({ props }) => props.borderColor ? ({ borderColor: getColor(props.borderColor) }) : null,
  borderStyle: ({ props }) => props.borderStyle && ({ borderStyle: props.borderStyle }),

  borderLeft: ({ props }) => props.borderLeft ? diffBorder(props.borderLeft, 'borderLeft') : null,
  borderTop: ({ props }) => props.borderTop ? diffBorder(props.borderTop, 'borderTop') : null,
  borderRight: ({ props }) => props.borderRight ? diffBorder(props.borderRight, 'borderRight') : null,
  borderBottom: ({ props }) => props.borderBottom ? diffBorder(props.borderBottom, 'borderBottom') : null,

  opacity: ({ props }) => props.opacity && ({ opacity: props.opacity }),
  visibility: ({ props }) => execClass({ visibility: props.visibility })
}
const execClass = (prop, element, state) => {
  const { props } = element
  if (props[prop]) return { prop }
}
