'use strict'

import { MEDIA as BREAKPOINTS } from '@symbo.ls/scratch'

export const Responsive = {
  on: {
    init: (el, s) => {
      const { props } = el

      for (const screen in props) {
        if (screen.slice(0, 1) === '@') {
          const mediaName = screen.slice(1)
          const responsiveKey = `@media screen and ${BREAKPOINTS[mediaName]}`
          const screenProps = props[screen]
          const calculatedScreenProps = {}

          for (const prop in screenProps) {
            // if (!el.class || !el.class[prop]) return
            // const classProp = el.class[prop]
            const classProp = el.class[prop]
            if (typeof classProp !== 'function') continue
            let calculatedProp = classProp({ props: screenProps })

            if (Array.isArray(calculatedProp)) {
              calculatedProp = Object.assign({}, ...calculatedProp)
            }

            for (const finalProp in calculatedProp) {
              calculatedScreenProps[finalProp] = calculatedProp[finalProp]
            }
          }

          const { MEDIA } = el.class
          if (MEDIA) MEDIA[responsiveKey] = calculatedScreenProps
          else {
            el.class.MEDIA = {
              [responsiveKey]: calculatedScreenProps
            }
          }
        } else if (screen.slice(0, 1) === ':') {
          const selectorProps = {}
          // const selectorName = screen.slice(1)
          const underSelectorProps = props[screen]
          const selectorKey = `&${screen}`

          for (const prop in underSelectorProps) {
            const classProp = el.class[prop]
            if (typeof classProp !== 'function') continue
            let calculatedProp = classProp({ props: underSelectorProps })

            if (Array.isArray(calculatedProp)) {
              calculatedProp = Object.assign({}, ...calculatedProp)
            }

            for (const finalProp in calculatedProp) {
              selectorProps[finalProp] = calculatedProp[finalProp]
            }
          }

          const { SELECTORS } = el.class
          if (SELECTORS) SELECTORS[selectorKey] = selectorProps
          else {
            el.class.SELECTORS = {
              [selectorKey]: selectorProps
            }
          }
        }
      }
    }
  }
}
