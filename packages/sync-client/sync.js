'use strict'

import { isNumber } from '@domql/utils'
import { init, connect, Notification } from 'smbls'

const connectedToSymbols = (clientsCount, element, state) => {
  if (isNumber(clientsCount) && clientsCount > 1) {
    if (!state.connected) {
      state.notifications.connected = {
        title: 'Connected',
        message: 'to the Symbols live server'
      }

      state.update({ connected: true })

      const t = setTimeout(() => {
        delete state.notifications.connected
        console.log(element.notifications.content)
        element.notifications.content[0]
          .setProps({ animation: 'fadeOutDown' })
        state.update({ connected: true })
        clearTimeout(t)
      }, 3000)
    }
  } else {
    if (state.connected) {
      state.notifications.connected = {
        title: 'Disconnected',
        message: 'from the Symbols live server',
        type: 'error'
      }

      state.update({ connected: false })

      const t = setTimeout(() => {
        delete state.notifications.connected
        element.notifications.content.connected
          .setProps({ animation: 'fadeOutDown' })
        state.update({ connected: true })
        clearTimeout(t)
      }, 3000)
    }
  }
}

const onConnect = (element, state) => {
  return (socketId, socket) => {
    // send('components', { COMPONENTS: a(COMPONENTS) })
  }
}

const onDisconnect = (element, state) => {
  return () => {}
}

const onChange = (element, state) => {
  return (event, data) => {
    if (event === 'liveChange') {
      const obj = JSON.parse(data)
      const { PROJECT_STATE, PROJECT_SYSTEM } = obj

      if (PROJECT_STATE) state.update(PROJECT_STATE)
      if (PROJECT_SYSTEM) init(PROJECT_SYSTEM)
    }

    if (event === 'clientsCount') {
      connectedToSymbols(data, element, state)
    }
  }
}

const NOTIF_COLORS = {
  success: 'green',
  error: 'red',
  warning: 'yellow'
}

const Notifications = {
  props: {
    position: 'fixed',
    left: 'A2',
    bottom: 'Z2',
    zIndex: '999'
  },
  childExtend: {
    extend: [Notification],
    props: ({ state }) => ({
      animation: 'fadeInUp',
      animationDuration: 'C',
      background: NOTIF_COLORS[state.type || 'success'],
      icon: null,
      article: {
        title: { text: state.title },
        p: { text: state.message }
      }
    }),
    on: { click: (e, el) => el.setProps({ animation: 'fadeOutDown' }) }
  },
  $setCollection: ({ state }) => state.notifications
}

export const Sync = {
  notifications: Notifications,

  state: {
    notifications: {}
  },

  on: {
    render: (el, s) => {
      connect('byld.symbo.ls', {
        source: 'client',
        // socketUrl: 'ws://socket.symbols.app',
        location: window.location.host,
        onConnect: onConnect(el, s),
        onDisconnect: onDisconnect(el, s),
        onChange: onChange(el, s)
      })
    }
  }
}
