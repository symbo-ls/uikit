'use strict'

import { injectGlobal, css } from 'emotion'

injectGlobal`
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 200;
    src: url(https://github.com/limbforge/website/raw/master/app/assets/fonts/europa-light-webfont.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 400;
    src: url(https://github.com/limbforge/website/raw/master/app/assets/fonts/europa-regular-webfont.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 600;
    src: url(https://github.com/limbforge/website/raw/master/app/assets/fonts/europa-bold-webfont.woff2) format('woff2');
  }
  
  body { 
    font-family: 'Europa';
    background: currentColor;
    padding: 2%
  }
`

export default css`
  > h4 {
    margin-bottom: 2%;

    > a {
      color: white;
      text-decoration: none;
    }
  }

  > div {
    padding: 2em 4em 4em;
    border: 2px solid currentColor;
    background: white;
    max-width: 727px;
    border-radius: 6px;

    > div {
      margin: 3rem 3rem 0 0;
    }
  }
`
