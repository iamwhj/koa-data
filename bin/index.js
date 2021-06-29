#!/usr/bin/env node

const path = require('path')
const execa = require('execa')
const getPackageName = require('./utils').getPackageName
const createFile = require('./utils/createFile.js')
const questions = require('./questions')
const createOptions = require('./options')

let asyncExecute = async () => {
  // await input and merge params
  const answer = await questions()
  const options = createOptions(answer)

  // create file
  const rootPath = path.resolve(process.cwd(), getPackageName(options))
  createFile(rootPath, options)

  // install
  execa('npm install', {
    cwd: rootPath,
    stdio: [2, 2, 2]
  })
}

asyncExecute()