const fs = require('fs')
const path = require('path')
const { constantCase } = require('change-case')
const root = __dirname
const filePath = '../../../.env'

const file = fs.readFileSync(path.join(root, filePath)).toString().split('\n')
file.pop()

const vars = {}
file.forEach((line) => {
  const envVar = line.split('=')
  vars[envVar[0]] = envVar[1]
})

/**
 * envVarExists
 *
 * Check environment variable exists in .env file
 * @param {string} envVar to check if exists
 * @return {boolean} Is there an env var with same value as the @param
 */
const envVarExists = (envVar) => envVarsList().indexOf(constantCase(envVar)) > -1

/**
 * envVarsList
 *
 * List of environment variables that exist in the .env file
 * @return {array} List of environment variables
 */
const envVarsList = () => Object.keys(vars)

module.exports = {
  envVarExists,
  envVarsList,
}
