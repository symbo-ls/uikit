'use strict'

import { merge } from '@domql/utils'
import { CASES as CONFIG_CASES, MEDIA as CONFIG_MEDIA, getTheme } from '@symbo.ls/scratch'

const convertToClass = (subProps, element) => {
  const { class: className } = element
  const subPropsClassname = {}
  for (const prop in subProps) {
    const classnameExec = className[prop]
    if (typeof classnameExec !== 'function') continue

    const contertedToClass = classnameExec({ props: subProps })
    for (const finalProp in contertedToClass) subPropsClassname[finalProp] = contertedToClass[finalProp]
  }
  return subPropsClassname
}

const init = (el, s) => {
  const { props, class: className } = el

  for (const screen in props) {
    if (screen.slice(0, 1) === '@') {
      const mediaName = CONFIG_MEDIA[screen.slice(1)]
      const mediaKey = `@media screen and ${mediaName}`
      const screenProps = props[screen]

      const { MEDIA } = className
      if (!MEDIA) className.MEDIA = {}
      className.MEDIA[mediaKey] = convertToClass(screenProps, el)
    } else if (screen.slice(0, 1) === ':') {
      const selectorProps = props[screen]
      const selectorKey = `&${screen}`

      const { SELECTORS } = className
      if (!SELECTORS) className.SELECTORS = {}
      className.SELECTORS[selectorKey] = convertToClass(selectorProps, el)
    } else if (screen.slice(0, 1) === '$') {
      const caseKey = screen.slice(1)
      if (!CONFIG_CASES[caseKey]) continue

      const caseProps = props[screen]
      const execCaseProps = convertToClass(caseProps, el)

      const { CASE } = className
      if (!CASE) className.CASE = {}
      merge(className.CASE, execCaseProps)
    }
  }
}

export const Responsive = {
  on: {
    init,
    initUpdate: el => {
      const { props, class: className } = el
      const rootState = el.__root ? el.__root.state : el.state
      // console.log(props)

      if (props.theme) {
        // console.group(props.theme)
        const { theme } = props

        for (const key in theme) {
          if (key.includes('dark') || key.includes('light')) {
            const parse = key.split(': ')[1].split(')')[0]
            if (rootState.globalTheme === parse) {
              props.theme = getTheme(theme[key])
            } else props.theme = theme
            className.MEDIA_FORCED_BY_STATE = props.theme
            props.generatedTheme = true
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
