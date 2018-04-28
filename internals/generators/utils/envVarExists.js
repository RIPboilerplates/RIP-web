const fs = require('fs')
const path = require('path')
const constantCase = require('constant-case')
const root = __dirname
const filePath = '../../../.env'

/**
 * envVarExists
 *
 * Check environment variable exists in .env file
 * @param {string} envVar to check if exists
 * @return {boolean} Is there an env var with same value as the @param
 */
const envVarExists = (envVar) => {
  const file = fs.readFileSync(path.join(root, filePath)).toString()
  const vars = file.split('\n').map((line) => line.split('=')[0])
  vars.pop()
  return vars.indexOf(constantCase(envVar)) > -1
}

module.exports = envVarExists
