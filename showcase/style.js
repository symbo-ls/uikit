'use strict'

import { injectGlobal, css } from 'emotion'

import EuropaLight from '../assets/fonts/europa-light-webfont.woff2'
import EuropaRegular from '../assets/fonts/europa-regular-webfont.woff2'
import EuropaBold from '../assets/fonts/europa-bold-webfont.woff2'

injectGlobal`
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 200;
    src: url('${EuropaLight}') format('woff2');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 400;
    src: url('${EuropaRegular}') format('woff2');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 600;
    src: url('${EuropaBold}') format('woff2');
  }
  
  body {
    font-family: 'Europa';
    background: currentColor;
    padding: 2%
  }
`

export default `
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
