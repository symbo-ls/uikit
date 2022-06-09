'use strict'

import { RESPONSIVE } from '@symbo.ls/scratch'

export const Responsive = {
  on: {
    init: (el, s) => {
      const { props } = el

      // Object.keys(props)
      //   .filter(v => v.slice(0, 1) === '@')
      //   .map()

      for (const screen in props) {
        if (screen.slice(0, 1) === '@') {
          const screenName = screen.slice(1)
          const responsiveKey = `@media screen and ${RESPONSIVE[screenName]}`
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

          const { responsive } = el.class
          if (responsive) responsive[responsiveKey] = calculatedScreenProps
          else {
            el.class.responsive = {
              [responsiveKey]: calculatedScreenProps
            }
          }
        }
      }
    }
  }
}
