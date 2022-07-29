const path = require('path')

module.exports = {
  getSymbolId: (filePath, fileContent, fileHash) => {
    return path.basename(filePath, '.svg')
  }
}
