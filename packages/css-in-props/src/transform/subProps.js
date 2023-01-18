
import { isArray, merge } from '@domql/utils'
import { CASES as CONFIG_CASES, MEDIA as CONFIG_MEDIA } from '@symbo.ls/scratch'
import { registry } from '../registry'

const execClass = (key, props, result, rootProps) => {
  const className = registry[key]

  if (typeof className !== 'function') return

  let classExec = className(props)
  if (isArray(classExec)) {
    classExec = classExec.reduce((a, c) => merge(a, c), {})
  }

  for (const finalProp in classExec) {
    result[finalProp] = classExec[finalProp]
  }
}

export const transformProps = (props, result, rootProps) => {
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

export const transformMedia = (key, props, result, rootProps) => {
  const mediaName = CONFIG_MEDIA[key.slice(1)]
  const mediaKey = `@media screen and ${mediaName}`
  // result[mediaKey] = transformProps(props, result, rootProps)
  const obj = { [mediaKey]: transformProps(props, result, rootProps) }
  merge(result, obj)
}

export const transformSelector = (key, props, result, rootProps) => {
  const selectorKey = `&${key}`
  const obj = { [selectorKey]: transformProps(props, result, rootProps) }
  merge(result, obj)
}

export const transformCases = (key, props, result, rootProps) => {
  const caseKey = key.slice(1)
  if (!CONFIG_CASES[caseKey]) return
  merge(result, transformProps(props, result, rootProps))
}

export const transformConditionalCases = (key, props, result, rootProps) => {
  const caseKey = key.slice(1)
  if (!rootProps[caseKey]) return // remove classname if not here
  merge(result, transformProps(props, result, rootProps))
}

export const keySetters = {
  '@': transformMedia,
  ':': transformSelector,
  $: transformCases,
  '.': transformConditionalCases
}
