const fs = require('fs')
const path = require('path')
const constantCase = require('constant-case')
const root = __dirname
const redux = '../../../app/redux'
const reduxers = fs.readdirSync(path.join(root, redux)).filter((f) => fs.statSync(path.join(root, redux, f)).isDirectory())

let privateReduxer

/**
 * reducerExists
 *
 * Check reduxer exists in redux directory
 * @param {string} reduxer - Reduxer to check if exists
 * @return {boolean} Is there a folder same as the @param
 */
const reducerExists = (reduxer) => {
  privateReduxer = reduxer
  return reduxers.indexOf(reduxer) < 0
}

/**
 * constantExists
 *
 * Check Constant exists in reduxer
 * @param {string} reduxer - Reduxer to check
 * @param {string} constant - If exists in Reducer
 * @return {boolean} Does the param match a current constant
 */
const constantExists = (constantToCheck) => {
  const file = path.join(root, redux, privateReduxer, '/constants.js')
  const data = fs.readFileSync(file)
  return data.indexOf(constantCase(constantToCheck)) >= 0
}

module.exports = {
  reducerExists,
  constantExists,
}
