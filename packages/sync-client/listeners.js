'use strict'

import { SymbolsDebugger } from '.'
const app = SymbolsDebugger

window.onkeydown = (ev) => {
  if (ev.altKey && ev.shiftKey) {
    app.state.update({ debugging: true, preventSelect: true }, {
      // preventUpdate: true,
      preventContentUpdate: true,
      preventRecursive: true
    })
  }
}

window.onkeyup = (ev) => {
  if ((!ev.altKey || !ev.shiftKey) && app.state.debugging) {
    app.focus.state.update({ area: false })
    app.state.update({ debugging: false, preventSelect: false }, {
      // TODO: does not update false
      // preventUpdate: true,
      preventContentUpdate: true,
      preventRecursive: true,
      preventPropsUpdate: true
    })
  }
}
