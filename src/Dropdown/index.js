'use strict'

import style from './style'

const dropdown = {
  text: 'ewfewfr'
}

export default dropdown
// import style, {
//     listStyle,
//     listItemStyle,
//     activeListItemStyle,
//     gridItemStyle,
//     activeGridItemStyle,
//     gridStyle
//   } from './style'
  
// //   import Overflow from '../Overflow'
  
//   const click = (event, element, state) => {
//     var ctx = element.lookup('dropdown')
//     ctx.on.choose(element, state, ctx)
//   }
  
//   const Dropdown = {
//     // proto: Overflow,
//     style,
//     tag: 'section'
//   }
  
//   const Item = {
//     proto: Button,
//     define: {
//       value: param => param,
//       active: param => param
//     },
//     active: (element, state) => element.key === state.value
//   }
  
//   const ListItem = {
//     proto: Item,
//     define: {
//       caption: param => param
//     },
//     class: {
//       listItemStyle,
//       active: element => element.active ? activeListItemStyle : {}
//     },
//     _icon: {},
//     icon: 'checkMedium',
//     text: element => element.value,
//     span: element => element.caption,
//     on: { click }
//   }
  
//   export const List = {
//     tag: 'nav',
//     style: listStyle,
//     childProto: ListItem
//   }
  
//   const GridItem = {
//     proto: Item,
//     icon: element => element.key,
//     class: {
//       gridItemStyle,
//       active: element => element.active ? activeGridItemStyle : {}
//     },
//     text: '',
//     on: { click }
//   }
  
//   export const Grid = {
//     tag: 'nav',
//     style: gridStyle,
//     childProto: GridItem
//   }
  
//   export default Dropdown
  