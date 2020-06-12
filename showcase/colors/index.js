'use strict'

import { theme } from 'scratch'

var colors = {
  style: { display: 'flex', flexWrap: 'wrap' },
  class: {},
  childProto: {
    style: { padding: '16 26', marginRight: 26, marginBottom: 26 },
    class: { theme: element => theme[element.theme] },
    define: { theme: param => param || '' },
    text: element => element.key
  }
}

for (let th in theme) {
  colors[th] = { theme: th }
}

export default colors
