# Symbols

UI Library in composition of [Scratch](https://github.com/symbo.ls/scratch) and [DOMQL](https://github.com/symbo.ls/domql) or [DOMQL](https://github.com/symbo-ls/smbls/tree/main/packages/all/packages/react)

Check out the [documentation page](https://docs.symbols.app/).

[![npm version](https://badge.fury.io/js/smbls.svg)](https://badge.fury.io/js/smbls)

### UI Components

Library consists with packages. Components can be invoked individually.


### Setup

1. Installation
```
yarn add 'smbls'
```

2. Import the component from Symbols
```
import { Box } from 'smbls'
```

3. Use it inside your DOMQL code
### DOMQL
```javascript
const Header = {
  proto: Box,
  // ...Other Properties
}
```

### React
```javascript
<Box {...props} />
```
