'use strict'

import { Shape, Img, Icon } from '../../src'

import { styleBannerPurple } from './style'


export const bannerPurple = {
  proto: Shape,
  round: 16,
  theme: 'purple',
  style: styleBannerPurple,
  
  icon: {
    proto: Icon,
    name: 'checkMedium'
  },
  h2: 'Welcome to parent Mode',
  description: {
    users: {
      style: {  position: 'relative' },
      childProto: Img,
      ...[
        { src: 'https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5' }, 
        { src: 'https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5' }, 
        { src: 'https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5' }
      ]
    },
    p: 'You’ll now be able to chat with tutor privately. No other participants will see the messages.'
  }
  
}

export default {
  style: {
    background: 'black',
    padding: 25
  },
  bannerPurple
}