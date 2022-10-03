# Scratch framework

Scratch is CSS framework and methodology to build web, mobile and TV applications with one code base. 

[![npm version](https://badge.fury.io/js/%40rackai%2Fscratch.svg)](https://badge.fury.io/js/%40rackai%2Fscratch)

It recevies a configuration and outputs the design system of all design related properties. It also applies reset by default and receives a few options:

| option | default | description |
| --- | --- | --- |
| `verbose` | `dev: false` / `prod: false` | Output the warning logs in console |
| `useReset` | `true` | Apply CSS reset to the document |
| `useVariable` | `true` | Output CSS variables in properties |

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
})
```

### TODO:
- [ ] Accessibility (WCAG) automated  tests
- [ ] Scratch on `node`
