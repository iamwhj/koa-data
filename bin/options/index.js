const defaultOptions = require('./default.js')

module.exports = (inputOptions) => {
  const options = Object.assign(defaultOptions, inputOptions)
  return options
}