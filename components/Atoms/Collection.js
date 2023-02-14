'use strict'

import { isNot, isArray, isObject, isObjectLike, diff, deepCloneExclude } from '@domql/utils'

const EXCLUDE_FOR_DEEPCLONE = [
  // 'update', 'parse', 'clean', 'create', 'parent',
  // '__element', '__depends',
  // '__ref', '__root', '__components', '__extend', '__cached', '__projectSystem',
  // '__projectState', '__projectComponents', '__projectPages', '__projectFiddles',
  // 'projectStateUpdate', 'projectSystemUpdate'
]

export const Collection = {
  define: {
    $setCollection: (param, el, state) => {
      if (!param) return

      let data;
      if (isArray(param)) {
        data = deepCloneExclude(param) // no need to exclude anything here
      } else {
        const cloned = deepCloneExclude(param, EXCLUDE_FOR_DEEPCLONE)
        data = []
        for (const k in cloned) data.push(param[k])
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
        if (el.__stateCollectionCache) {
          const d = diff(param, el.__stateCollectionCache) // eslint-disable-line
        } else {
          el.__stateCollectionCache = deepCloneExclude(param, EXCLUDE_FOR_DEEPCLONE)
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
