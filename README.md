# css-in-props

UI Library in composition of [Scratch](https://github.com/smbo-ls/scratch) and [DOMQL](https://github.com/domql/domql)

[![npm version](https://badge.fury.io/js/css-in-props.svg)](https://badge.fury.io/js/css-in-props)

### Setup

1. Installation
```
yarn add css-in-props
```

2. Import the component from Symbols
```
import { transformClassname, transformEmotion } from 'css-in-props'
```

3. Use it inside your DOMQL code
```
const Box = ({ children, ...props }) => <div className={
  transformEmotion(transformClassname(props))
}>{children}</div>
```
