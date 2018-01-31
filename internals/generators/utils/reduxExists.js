/**
 * reduxExists
 *
 * Check whether the given action exist in the redux directory
 */

const fs = require('fs')
const path = require('path')
const reduxActions = fs.readdirSync(path.join(__dirname, '../../../app/redux'))

function reduxExists(reducer) {
  return reduxActions.indexOf(reducer) >= 0
}

module.exports = reduxExists
