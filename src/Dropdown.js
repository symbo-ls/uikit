'use strict'
import { IconText } from '.'

export const DropdownList = {
  tag: 'ul',

  props: {
    padding: '0 Y',
    maxHeight: 'G',
    style: {
      listStyleType: 'none'
    }
  },

  state: {
    active: '0'
  },

  childExtend: {
    tag: 'li',
    extend: IconText,

    props: (el, s) => ({
      active: s.active === el.key,
      position: 'relative',
      round: '0',
      align: 'center flex-end',
      flow: 'row-reverse',
      padding: 'Z2 C Z2 Y2',
      margin: '0',
      gap: 'Y2',
      theme: el.parent.props.theme + ' .child',

      ':hover': {
        style: {
          svg: { opacity: '0.5' }
        }
      },

      icon: {
        name: 'checkmark',
        opacity: '0.1',
        '.active': { opacity: '1' }
      },

      ':not(:first-child)': {
        '@dark': { border: 'gray4 .65, solid' },
        '@light': { border: 'gray11, solid' },
        borderWidth: '1px 0 0'
      }
    }),

    on: {
      click: (event, element, state) => {
        state.update({ active: element.key })
        console.log(state.active, element.key)
      }
    }
  }
}
