const inquirer = require('inquirer')
const packageName = require('./question/packageName.js')
const port = require('./question/port.js')
const router = require('./question/router.js')
const mongodb = require('./question/mongodb.js')

module.exports = async () => {
  let answer = await inquirer.prompt([
    packageName(),
    port(),
    router(),
    mongodb()
  ])
  return answer
}