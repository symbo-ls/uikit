'use strict'

const S3_BUCKET = 'https://symbols-fonts.s3.us-west-1.amazonaws.com'
const KarlaVariable = '/Karla/Karla-VariableFont_wght.ttf'
const KarlaItalicVariable = '/Karla/Karla-VariableFont_wght.ttf' // eslint-disable-line

export const FONT = {
  Karla: [{
    url: S3_BUCKET + KarlaVariable,
    fontWeight: 'variable',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF'
  }, {
    url: S3_BUCKET + KarlaVariable,
    fontStyle: 'normal',
    fontWeight: 'variable',
    fontDisplay: 'swap',
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
  }]
}

export const FONT_FAMILY = {
  StartWithKarla: {
    isDefault: true,
    value: ['"Karla"'],
    type: 'serif'
  }
}
