# react-box

React Box


## Table of Contents

* [Installation](#installation)
* [API documentation](#api-documentation)
* [Examples](#examples)
* [Properties](#props)

<!-- ## Browsers support -->

<!-- | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE 8 + ✔ | Firefox 31.0+ ✔ | Chrome 31.0+ ✔ | Safari 7.0+ ✔ | Opera 30.0+ ✔ | -->


## Install

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save @symbo.ls/react-box
    $ yarn add  @symbo.ls/react-box


## Usage

Box element which can be used with


## Examples
```javascript
import { Box } from '@symbo.ls/react'

// example 1
const buttonProps = {
  theme: 'primary',
  size: 'A',
  padding: 'B Z'
}

const Button2 = () => <Box tag="button" ...buttonProps />

// example 2
const buttonConf = {
  tag: 'button',
  props: {
    theme: 'primary',
    size: 'A',
    padding: 'B Z'
  }
}

const Button3 = () => <Box ...buttonConf />
```

## API
The primary documentation for react-box is the reference book, which describes the API and gives examples of its usage.

### Props

Properties:
 className
 ref 
 href - link destination of the element
 target - link target
 src - Source path (eg Link) of the image
 alt - Alternative text in case image does not load
 title - Title when hovering the image
 ariaLabel


style properties:
`width` - Width of the element
`height` - Height of the element
`boxSize` - [`width`, `heigh`]

`maxWidth` - Max width of the box
`minWidth` - Min width of the box
`widthRange` - Min and Max width range of the box

`maxHeight` - Max height of the box
`minHeight` - Min height of the box
`heightRange` - Min and Max height range of the box

`aspectRatio` - Aspect ratio of the box (1/3, 3/7…)
`padding` - Inner space of the element
`margin` - Outer space of the element
`gap` - Space between children inside the element

`flexFlow` - 
`flexAlign` - `display: flex`, `alignItems` and `justifyContent`

`flow`
`flexDirection`
`alignItems`
`justifyContent`
`gap`

`text` - Text value in the element
`size` - Text size of the element

`direction` - Language direction of the component

    values: `ltr`, `rtl`
## Important Note



## License

`@symbo.ls/react-box` is released under the MIT license.
