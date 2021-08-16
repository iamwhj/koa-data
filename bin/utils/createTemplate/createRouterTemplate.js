const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

function createRouter(options) {
  const filePath = path.resolve(__dirname, '../../template/router.ejs')
  const templateCode = fs.readFileSync(filePath, 'utf-8')
  const content = ejs.render(templateCode, options)

  return content
}

module.exports = createRouter