const chalk = require('chalk')
const print = require('./print')

/**
 * Adds mark cross symbol
 */
function addXMark(callback) {
  print(chalk.red(' ✘'))
  if (callback) callback()
}

module.exports = addXMark
