'use strict'

import { isNot, isArray, isObject, isObjectLike, diff, deepClone } from '@domql/utils'

export const Collection = {
  define: {
    $setCollection: (param, el, state) => {
      if (!param) return

      let data = isArray(param) ? param : []

      if (isObject(param)) {
        for (const obj in param) { data.push(param[obj]) }
      }

      data = data.map(item => !isObjectLike(item) ? {
        props: { value: item }
      } : item)

      if (data.length) {
        const t = setTimeout(() => {
          el.set({ tag: 'fragment', ...data }, { preventDefineUpdate: '$setCollection' })
          clearTimeout(t)
        })
      }

      return data
    },

    $setStateCollection: (param, el, state) => {
      if (!param) return
      if (param.parse) param = param.parse()
      if (isNot(param)('array', 'object')) return

      if (el.key === 'cnt') {
        if (el.__ref.__stateCollectionCache) {
          const d = diff(param, el.__ref.__stateCollectionCache) // eslint-disable-line
        } else {
          el.__ref.__stateCollectionCache = deepClone(param)
        }
      }

      const obj = { tag: 'fragment' }

      for (const key in param) {
        const value = param[key]
        obj[key] = { state: isObjectLike(value) ? value : { value } }
      }

      const set = () => {
        el.set(obj, { preventDefineUpdate: '$setStateCollection' })
      }

      if (el.props.lazyLoad) {
        window.requestAnimationFrame(set)
      } else set()

      return obj
    },

    $setPropsCollection: (param, el, state) => {
      if (!param) return
      if (isNot(param)('array', 'object')) return

      const obj = { tag: 'fragment' }
      for (const key in param) {
        const value = param[key]
        obj[key] = { props: isObjectLike(value) ? value : { value } }
      }

      const set = () => {
        el.set(obj, { preventDefineUpdate: '$setStateCollection' })
      }

      if (el.props.lazyLoad) {
        window.requestAnimationFrame(set)
      } else set()

      return obj
    }
  }
}
