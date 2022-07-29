'use strict'

import { merge, isArray } from '@domql/utils'
import { CASES as CONFIG_CASES, MEDIA as CONFIG_MEDIA, getTheme } from '@symbo.ls/scratch'

const convertPropsToClass = (subProps, lib, element) => {
  const { class: className } = element
  const subPropsClassname = {}
  for (const prop in subProps) {
    // if (prop.slice(0, 1) === ':') {
    //   applySelectorProps(prop, lib, element)
    //   continue
    // }

    const classnameExec = className[prop]
    if (typeof classnameExec !== 'function') continue

    let classExec = classnameExec({ props: subProps })
    if (isArray(classExec)) {
      classExec = classExec.reduce((a, c) => merge(a, c), {})
    }

    for (const finalProp in classExec) {
      subPropsClassname[finalProp] = classExec[finalProp]
    }
  }
  return subPropsClassname
}

const applyMediaProps = (key, lib, element) => {
  const { props } = element
  const mediaName = CONFIG_MEDIA[key.slice(1)]
  const mediaKey = `@media key and ${mediaName}`
  const mediaProps = props[key]
  lib.media[mediaKey] = convertPropsToClass(mediaProps, lib, element)
}

const applySelectorProps = (key, lib, element) => {
  const { props } = element
  const selectorKey = `&${key}`
  const selectorProps = props[key]
  lib.selector[selectorKey] = convertPropsToClass(selectorProps, lib, element)
}

const applyCaseProps = (key, lib, element) => {
  const { props } = element
  const caseKey = key.slice(1)
  if (!CONFIG_CASES[caseKey]) return
  const caseProps = props[key]
  merge(lib.case, convertPropsToClass(caseProps, lib, element))
}

const keySetters = {
  '@': applyMediaProps,
  ':': applySelectorProps,
  $: applyCaseProps
}

const init = (el, s) => {
  const { props, class: className } = el

  const CLASS_NAMES = {
    media: {},
    selector: {},
    case: {}
  }

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    if (setter) setter(key, CLASS_NAMES, el)
    // if (key.slice(0, 1) === '@') {
    //   applyMediaProps(key, CLASS_NAMES.media, el)
    // } else if (key.slice(0, 1) === ':') {
    //   applySelectorProps(key, CLASS_NAMES.selector, el)
    // } else if (key.slice(0, 1) === '$') {
    //   applyCaseProps(key, CLASS_NAMES.case, el)
    // }
  }

  merge(className, CLASS_NAMES)
}

export const Responsive = {
  on: {
    init,
    initUpdate: el => {
      // FORCE STATE UPDATE:
      const { props, class: className } = el
      const rootState = el.__root ? el.__root.state : el.state
      // console.log(props)
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
  }
}
