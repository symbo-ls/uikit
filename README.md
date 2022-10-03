# Scratch framework

Scratch is CSS framework and methodology to build web, mobile and TV applications with one code base. 

[![npm version](https://badge.fury.io/js/%40rackai%2Fscratch.svg)](https://badge.fury.io/js/%40rackai%2Fscratch)

Recevies a configuration and outputs the system of design related properties. It also applies reset by default and receives a few options:

| option | default | description |
| --- | --- | --- |
| `verbose` | `false` | Output the warning logs in console (only in `dev`, `test` enviroment) |
| `useReset` | `true` | Apply CSS reset to the document |
| `useVariable` | `true` | Output CSS variables in properties |

A design system configuration of the following systems:

```javascript
import { set } from '@symbo.ls/scratch'

set({
  color: {},
  theme: {},
  typography: {},
  space: {},
  media: {},
  icons:{},
  font: {},
  font_family: {},
  timing: {},
  reset: {}
}, { 
  // options
})
```

Read more at [docs](https://www.docs.symbols.app/design-system)

### TODO:
- [ ] Accessibility (WCAG) automated  tests
- [ ] Scratch on `node`
