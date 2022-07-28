'use strict'

import { getTheme, CASES, MEDIA as BREAKPOINTS } from '@symbo.ls/scratch'

const init = (el, s) => {
  const { props, class: className } = el

  for (const screen in props) {
    if (screen.slice(0, 1) === '@') {
      const mediaName = screen.slice(1)
      const responsiveKey = `@media screen and ${BREAKPOINTS[mediaName]}`
      const screenProps = props[screen]
      const calculatedScreenProps = {}

      for (const prop in screenProps) {
        // if (!className || !className[prop]) return
        // const classProp = className[prop]
        const classProp = className[prop]
        if (typeof classProp !== 'function') continue
        let calculatedProp = classProp({ props: screenProps })

        if (Array.isArray(calculatedProp)) {
          calculatedProp = Object.assign({}, ...calculatedProp)
        }

        for (const finalProp in calculatedProp) {
          calculatedScreenProps[finalProp] = calculatedProp[finalProp]
        }
      }

      const { MEDIA } = className
      if (!MEDIA) className.MEDIA = {}
      className.MEDIA[responsiveKey] = calculatedScreenProps
    } else if (screen.slice(0, 1) === ':') {
      const selectorProps = {}
      // const selectorName = screen.slice(1)
      const underSelectorProps = props[screen]
      const selectorKey = `&${screen}`

      for (const prop in underSelectorProps) {
        const classProp = className[prop]
        if (typeof classProp !== 'function') continue
        let calculatedProp = classProp({ props: underSelectorProps })

        if (Array.isArray(calculatedProp)) {
          calculatedProp = Object.assign({}, ...calculatedProp)
        }

        for (const finalProp in calculatedProp) {
          selectorProps[finalProp] = calculatedProp[finalProp]
        }
      }

      const { SELECTORS } = className
      if (SELECTORS) SELECTORS[selectorKey] = selectorProps
      else {
        className.SELECTORS = {
          [selectorKey]: selectorProps
        }
      }
    } else if (screen.slice(0, 1) === '$') {
      const caseKey = screen.slice(1)
      const caseProps = props[screen]
      const calculatedCaseProps = {}

      if (!CASES[caseKey]) return

      for (const prop in caseProps) {
        // if (!className || !className[prop]) return
        // const classProp = className[prop]
        const classProp = className[prop]
        if (typeof classProp !== 'function') continue
        let calculatedProp = classProp({ props: caseProps })

        if (Array.isArray(calculatedProp)) {
          calculatedProp = Object.assign({}, ...calculatedProp)
        }

        for (const finalProp in calculatedProp) {
          calculatedCaseProps[finalProp] = calculatedProp[finalProp]
        }
      }

      const { CASE } = className
      if (!CASE) className.CASE = {}
      className.CASE[caseKey] = calculatedCaseProps
      // Object.assign(className.CASE[caseKey], calculatedCaseProps)
      // console.log(className.CASE)
    }
  }
}

export const Responsive = {
  on: {
    init,
    initUpdate: el => {
      const { props, class: className } = el
      const rootState = el.__root ? el.__root.state : el.state

      if (props.theme) {
        props.returnGeneratedTheme = getTheme(props.theme)
        const { returnGeneratedTheme } = props

        for (const key in returnGeneratedTheme) {
          if (key.includes('dark') || key.includes('light')) {
            const parse = key.split(': ')[1].split(')')[0]
            if (rootState.globalTheme === parse) {
              props.returnGeneratedTheme = getTheme(returnGeneratedTheme[key])
            } else props.returnGeneratedTheme = returnGeneratedTheme
            className.MEDIA_FORCED_BY_STATE = props.returnGeneratedTheme
          }
        }
      }

      for (const screen in props) {
        if (screen.slice(0, 1) === '@') {
          const mediaName = screen.slice(1)
          const responsiveKey = `@media screen and ${BREAKPOINTS[mediaName]}`
          if (mediaName === 'dark' || mediaName === 'light') {
            const { MEDIA_FORCE } = className
            if (!MEDIA_FORCE) className.media = {}
            if (rootState.globalTheme === mediaName) {
              className.MEDIA_FORCED = className.MEDIA[responsiveKey]
            } else className.MEDIA_FORCED = {}
          }
        }
      }
    }
  }
}
