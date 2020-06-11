'use strict'

var themeMap = {
  text: 'color',
  background: 'backgroundColor',
  border: 'borderColor'
}

export default scheme => {
  var obj = {}
  for (let prop in scheme) {
    var value = scheme[prop]
    var mappedProp = themeMap[prop]
    if (mappedProp && value) {
      obj[mappedProp] = value
    }
  }
  return obj
}
