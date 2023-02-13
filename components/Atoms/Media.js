'use strict'

import { merge, isArray } from '@domql/utils'
import { getSystemTheme } from './Theme'

const keySetters = {
  '@': (key, props, result, element, isSubtree) => applyMediaProps(key, props, isSubtree ? result : result.media, element),
  ':': (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  '[': (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  '&': (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  $: (key, props, result, element, isSubtree) => applyCaseProps(key, props, isSubtree ? result : result.case, element),
  '.': (key, props, result, element, isSubtree) => applyConditionalCaseProps(key, props, isSubtree ? result : result.case, element),
  '!': (key, props, result, element, isSubtree) => applyConditionalFalsyProps(key, props, isSubtree ? result : result.case, element)
}

const execClass = (key, props, result, element) => {
  const { class: className } = element
  const classnameExec = className[key]

  if (typeof classnameExec !== 'function') return

  let classExec = classnameExec({
    props,
    context: element.context,
    state: element.state
  })
  if (isArray(classExec)) {
    classExec = classExec.reduce((a, c) => merge(a, c), {})
  }

  for (const finalProp in classExec) {
    result[finalProp] = classExec[finalProp]
  }

  return classExec
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
  const { context } = element
  if (!context.system || !context.system.MEDIA) return
  const globalTheme = getSystemTheme(element)
  const { MEDIA } = context.system
  const mediaName = MEDIA[key.slice(1)]
  const generatedClass = convertPropsToClass(props, result, element)

  const name = key.slice(1)
  const isTheme = ['dark', 'light'].includes(name)
  const matchesGlobal = name === globalTheme

  if (globalTheme && isTheme) {
    if (matchesGlobal) return merge(result, generatedClass)
    return
  }

  const mediaKey = `@media screen and ${mediaName}`
  result[mediaKey] = generatedClass
  return result[mediaKey]
}

const applySelectorProps = (key, props, result, element) => {
  const selectorKey = `&${key}`
  result[selectorKey] = convertPropsToClass(props, result, element)
  return result[selectorKey]
}

const applyCaseProps = (key, props, result, element) => {
  const { CASES } = element.context && element.context.system
  const caseKey = key.slice(1)
  const isPropTrue = element.props[caseKey]
  if (!CASES[caseKey] && !isPropTrue) return
  return merge(result, convertPropsToClass(props, result, element))
}

const applyConditionalCaseProps = (key, props, result, element) => {
  const caseKey = key.slice(1)
  const isPropTrue = element.props[caseKey] || element.state[caseKey] === true
  if (!isPropTrue) return // remove classname if not here
  return merge(result, convertPropsToClass(props, result, element))
}

const applyConditionalFalsyProps = (key, props, result, element) => {
  const caseKey = key.slice(1)
  const isPropTrue = element.props[caseKey] || element.state[caseKey] === true
  if (!isPropTrue) return merge(result, convertPropsToClass(props, result, element))
}

const applyTrueProps = (props, result, element) => merge(result, convertPropsToClass(props, result, element))

const beforeClassAssign = (element, s) => {
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

export const initUpdate = element => {
  const { props, context, class: className } = element
  const globalTheme = context.system.globalTheme

  const parentProps = element.parent.props
  if (parentProps && parentProps.spacingRatio && parentProps.inheritSpacingRatio) {
    element.setProps({
      spacingRatio: parentProps.spacingRatio,
      inheritSpacingRatio: true
    }, {
      preventRecursive: true,
      ignoreInitUpdate: true
    })
  }

  if (globalTheme) {
    const CLASS_NAMES = {
      media: {},
      selector: {},
      case: {}
    }

    for (const key in props) {
      const setter = keySetters[key.slice(0, 1)]
      if (key === 'theme') {
        props.update({
          themeModifier: globalTheme
        }, { preventRecursive: true, ignoreInitUpdate: true, preventDefineUpdate: '$setStateCollection' })
      } else if (key === 'true') applyTrueProps(props[key], CLASS_NAMES, element)
      if (setter) setter(key, props[key], CLASS_NAMES, element)
    }

    if (Object.keys(CLASS_NAMES.media).length) {
      className.media = CLASS_NAMES.media
    }
    className.selector = CLASS_NAMES.selector
    className.case = CLASS_NAMES.case
  }
}

export const Media = {
  on: { beforeClassAssign, initUpdate }
}
