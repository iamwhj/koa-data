const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

function createConfig(options) {
  const filePath = path.resolve(__dirname, '../../template/config.ejs')
  const templateCode = fs.readFileSync(filePath, 'utf-8')
  const content = ejs.render(templateCode, options)

  return content
}

module.exports = createConfig