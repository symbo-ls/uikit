'use strict'

import { getColor } from '@symbo.ls/scratch'
import { send } from 'smbls'

export const DevFocus = {
  focus: {
    state: {},
    props: (el, s) => ({
      position: 'fixed',
      hide: !s.area || !s.parent.debugging
    }),
    class: {
      inset: (el, state) => {
        const { area } = state
        if (!area) return
        const { x, y, width, height } = area
        return {
          top: y - 6 + 'px',
          left: x - 6 + 'px',
          width: width + 12 + 'px',
          height: height + 12 + 'px'
        }
      }
    },
    style: {
      zIndex: '9999999',
      borderRadius: '10px',
      boxShadow: `0 0 10px ${getColor('blue 0.1')}, 0 0 0 3px ${getColor('blue 0.3')}, 0 0 100vmax 100vmax ${getColor('black 0.75')}`,
      pointerEvents: 'none'
    },
    span: {
      props: {
        position: 'absolute',
        margin: 'A2 0',
        fontSize: 'Z',
        color: 'text',
        // color: 'blue',
        zIndex: '99999999',
        textDecoration: 'underline',
        fontWeight: '500',
        top: '100%'
      },
      style: {
        boxShadow: '0 25px 10px 35px black',
        textShadow: '0 0 10px black'
      },
      text: (el, s) => s.focusKey
    }
  },

  on: {
    mousemove: (ev, e, state) => {
      const el = ev.target.ref
      const component = findComponent(el)
      if (!component || !state.debugging) return

      const focusState = e.focus.state
      const updateValue = (area) => {
        focusState.update({ area, focusKey: component.__componentKey })
      }

      const update = () => {
        if (ev.altKey && ev.shiftKey) {
          const { x, y, width, height } = component.node.getBoundingClientRect()
          const area = { x, y, width, height }

          if (!focusState.area) return updateValue(area)
          if (focusState.area.x !== area.x) updateValue(area)
        } else if (focusState.area) {
          focusState.update({ area: false })
        }
      }

      window.requestAnimationFrame(() => {
        update()
        window.requestAnimationFrame(update)
      })
    },
    click: (ev, elem, state) => {
      const el = ev.target.ref
      const component = findComponent(el)
      if (!component || !component.__componentKey || !state.debugging) return
      send('route', `/component/${component.__componentKey}`)
      return false
    }
  }
}

function findComponent (el) {
  if (!el) return
  if (el.__componentKey) return el
  return findComponent(el.parent)
}
