'use strict'

import { merge, isArray } from '@domql/utils'
import { CASES as CONFIG_CASES, MEDIA as CONFIG_MEDIA, getTheme } from '@symbo.ls/scratch'

// const keySetters = {
//   '@': (props, result, element, isSubtree) => {
//     if (isSubtree) result.media = {}
//     return applyMediaProps(props, result.media, element)
//   },
//   ':': (props, result, element, isSubtree) => {
//     if (isSubtree) result.selector = {}
//     return applySelectorProps(props, result.selector, element)
//   },
//   $: (props, result, element, isSubtree) => {
//     if (isSubtree) result.case = {}
//     return applyCaseProps(props, result.case, element)
//   }
// }

// const keySetters = {
//   '@': (props, result, element) => applyMediaProps(props, result.media, element),
//   ':': (props, result, element) => applySelectorProps(props, result.selector, element),
//   $: (props, result, element) => applyCaseProps(props, result.case, element)
// }

const keySetters = {
  '@': (key, props, result, element, isSubtree) => applyMediaProps(key, props, isSubtree ? result : result.media, element),
  ':': (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  $: (key, props, result, element, isSubtree) => applyCaseProps(key, props, isSubtree ? result : result.case, element),
  '.': (key, props, result, element, isSubtree) => applyCaseProps(key, props, isSubtree ? result : result.case, element)
}

const execClass = (key, props, result, element) => {
  const { class: className } = element
  const classnameExec = className[key]

  if (typeof classnameExec !== 'function') return

  let classExec = classnameExec({ props })
  if (isArray(classExec)) {
    classExec = classExec.reduce((a, c) => merge(a, c), {})
  }

  for (const finalProp in classExec) {
    result[finalProp] = classExec[finalProp]
  }
}

const convertPropsToClass = (props, result, element) => {
  const propsClassObj = {}

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    if (setter) {
      setter(key, props[key], propsClassObj, element, true)
      continue
    } else {
      execClass(key, props, propsClassObj, element)
    }
  }

  return propsClassObj
}

const applyMediaProps = (key, props, result, element) => {
  const mediaName = CONFIG_MEDIA[key.slice(1)]
  const mediaKey = `@media screen and ${mediaName}`
  result[mediaKey] = convertPropsToClass(props, result, element)
}

const applySelectorProps = (key, props, result, element) => {
  const selectorKey = `&${key}`
  result[selectorKey] = convertPropsToClass(props, result, element)
}

const applyCaseProps = (key, props, result, element) => {
  const caseKey = key.slice(1)
  if (!(CONFIG_CASES[caseKey] || element.props[caseKey])) return
  merge(result, convertPropsToClass(props, result, element))
}

const init = (element, s) => {
  const { props, class: className } = element

  const CLASS_NAMES = {
    media: {},
    selector: {},
    case: {}
  }

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    if (setter) setter(key, props[key], CLASS_NAMES, element)
  }

  merge(className, CLASS_NAMES)
}

export const Responsive = {
  on: { init }
}

export const initUpdate = el => {
  // FORCE STATE UPDATE:
  const { props, class: className } = el
  const rootState = el.__root ? el.__root.state : el.state
  if (el.key !== 'app') return

  if (props.theme) {
    const { theme } = props
    // console.group(props.theme)

    const convertTheme = getTheme(theme)

    for (const key in convertTheme) {
      if (key.includes('dark') || key.includes('light')) {
        const parse = key.split(': ')[1].split(')')[0]
        if (rootState.globalTheme === parse) {
          props.theme = getTheme(theme[key])
        } else props.theme = theme
        className.MEDIA_FORCED_BY_STATE = props.theme
      }
    }
    // console.groupEnd(props.theme)
  }

  for (const screen in props) {
    if (screen.slice(0, 1) === '@') {
      const mediaName = screen.slice(1)
      const mediaKey = `@media screen and ${CONFIG_MEDIA[mediaName]}`
      if (mediaName === 'dark' || mediaName === 'light') {
        const { MEDIA_FORCE } = className
        if (!MEDIA_FORCE) className.media = {}
        if (rootState.globalTheme === mediaName) {
          className.MEDIA_FORCED = className.MEDIA[mediaKey]
        } else className.MEDIA_FORCED = {}
      }
    }
  }
}
