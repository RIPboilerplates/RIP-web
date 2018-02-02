const chalk = require('chalk')
const print = require('./print')

/**
 * Adds mark check symbol
 */
function addCheckMark(callback) {
  print(chalk.green(' ✓'))
  if (callback) callback()
}

module.exports = addCheckMark
