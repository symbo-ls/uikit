
import { isArray, merge } from '@domql/utils'
import { CASES as CONFIG_CASES, MEDIA as CONFIG_MEDIA } from '@symbo.ls/scratch'
import { classNames } from './classNames'

export const keySetters = {
  '@': (key, props, result, rootProps) => applyMediaProps(key, props, result, rootProps),
  ':': (key, props, result, rootProps) => applySelectorProps(key, props, result, rootProps),
  $: (key, props, result, rootProps) => applyCaseProps(key, props, result, rootProps),
  '.': (key, props, result, rootProps) => applyConditionalCaseProps(key, props, result, rootProps)
}

const execClass = (key, props, result, rootProps) => {
  const className = classNames[key]

  if (typeof className !== 'function') return

  let classExec = className({ props })
  if (isArray(classExec)) {
    classExec = classExec.reduce((a, c) => merge(a, c), {})
  }

  for (const finalProp in classExec) {
    result[finalProp] = classExec[finalProp]
  }
}

const convertPropsToClass = (props, result, rootProps) => {
  const propsClassObj = {}

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    if (setter) {
      setter(key, props[key], propsClassObj, rootProps)
      continue
    } else {
      execClass(key, props, propsClassObj, rootProps)
    }
  }

  return propsClassObj
}

const applyMediaProps = (key, props, result, rootProps) => {
  const mediaName = CONFIG_MEDIA[key.slice(1)]
  const mediaKey = `@media screen and ${mediaName}`
  // result[mediaKey] = convertPropsToClass(props, result, rootProps)
  merge(result, convertPropsToClass(props, result, rootProps))
}

const applySelectorProps = (key, props, result, rootProps) => {
  const selectorKey = `&${key}`
  result[selectorKey] = convertPropsToClass(props, result, rootProps)
  merge(result, convertPropsToClass(props, result, rootProps))
}

const applyCaseProps = (key, props, result, rootProps) => {
  const caseKey = key.slice(1)
  if (!CONFIG_CASES[caseKey]) return
  merge(result, convertPropsToClass(props, result, rootProps))
}

const applyConditionalCaseProps = (key, props, result, rootProps) => {
  const caseKey = key.slice(1)
  if (!rootProps[caseKey]) return // remove classname if not here
  merge(result, convertPropsToClass(props, result, rootProps))
}
