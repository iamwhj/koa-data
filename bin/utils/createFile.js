const fs = require('fs')
const prettier = require('prettier')
const createCode = require('./createTemplate/createCodeTempate.js')
const createPackage = require('./createTemplate/createPackageTemplate.js')
const createConfig = require('./createTemplate/createConfigTemplate.js')
const createRouter = require('./createTemplate/createRouterTemplate.js')
const createUtils = require('./createTemplate/createUtilsTemplate.js')


const formatCode = (code, format="babel") => prettier.format(code, { parser: format });

function crateFile(rootPath, options) {
  const { router, mongodb } = options
  // 创建根文件夹
  fs.mkdirSync(rootPath)
  
  // 2. 创建主文件代码
  fs.writeFileSync(rootPath + '/index.js', formatCode(createCode(options)))
  // 根据条件创建二级目录以及主代码
  if (router) {
    // config folder
    fs.mkdirSync(rootPath + '/config')
    fs.writeFileSync(rootPath + '/config' + '/index.js', formatCode(createConfig(options)))

    // routers folder
    fs.mkdirSync(rootPath + '/routers')
    fs.writeFileSync(rootPath + '/routers' + '/rbase.js', formatCode(createRouter(options)))
  }
  if (mongodb) {
    // utils folder
    fs.mkdirSync(rootPath + '/utils')
    fs.writeFileSync(rootPath + '/utils' + '/index.js', formatCode(createUtils(options)))
  }

  // 3. 创建 package.json
  fs.writeFileSync(rootPath + '/package.json', formatCode(createPackage(options), 'json'))
}

module.exports = crateFile