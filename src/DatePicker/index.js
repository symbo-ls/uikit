'use strict'

import style from './style'

import Icon from '../Icon'
import Shape from '../Shape'
import { Block } from '../Block'

export const DatePicker = {
  style,

  proto: [Shape, Block],
  props: {
    theme: 'lightDark',
    spacing: 'A',
    round: 'Z',
    depth: 16
  },

  aside: {
    childProto: { tag: 'button' },
    ...[
      { text: '2020' },
      { text: '2021' },
      { text: '2022' },
      { text: '2023' },
      { text: '2024' },
      { text: '2025' },
      { text: '2026' },
      { text: '2026' },
      { text: '2026' }
    ]
  },

  main: {
    header: {
      icon: {
        proto: Icon,
        props: { icon: 'arrowMediumLeft' }
      },
      month: {
        childProto: { tag: 'span' },
        ...[
          { text: 'january' },
          { text: 'february' },
          { text: 'march' },
          { text: 'april' },
          { text: 'may' },
          { text: 'june' },
          { text: 'july' },
          { text: 'august' },
          { text: 'september' },
          { text: 'october' },
          { text: 'november' },
          { text: 'december' }
        ]
      },
      icon2: {
        proto: Icon,
        props: { icon: 'arrowMediumRight' }
      }
    },
    days: {
      tag: 'section',
      header: {
        childProto: { tag: 'span' },
        ...[
          { text: 'Mo' },
          { text: 'Tu' },
          { text: 'We' },
          { text: 'Th' },
          { text: 'Fr' },
          { text: 'Sa' },
          { text: 'Su' }
        ]
      },
      content: {
        childProto: { tag: 'button' },
        ...[
          { text: '1' },
          { text: '2' },
          { text: '3' },
          { text: '4' },
          { text: '5' },
          { text: '6' },
          { text: '7' },
          { text: '8' },
          { text: '9' },
          { text: '10' },
          { text: '11' },
          { text: '12' },
          { text: '13' },
          { text: '14' },
          { text: '15' },
          { text: '16' },
          { text: '17' },
          { text: '18' },
          { text: '19' },
          { text: '20' },
          { text: '21' },
          { text: '22' },
          { text: '23' },
          { text: '24' },
          { text: '25' },
          { text: '26' },
          { text: '27' },
          { text: '28' },
          { text: '29' },
          { text: '30' },
          { text: '31' }
        ]
      }
    }
  }
}
