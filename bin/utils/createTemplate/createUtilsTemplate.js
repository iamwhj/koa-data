const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

function createUtils(options) {
  const filePath = path.resolve(__dirname, '../../template/utils.ejs')
  const templateCode = fs.readFileSync(filePath, 'utf-8')
  const content = ejs.render(templateCode, options)

  return content
}

module.exports = createUtils