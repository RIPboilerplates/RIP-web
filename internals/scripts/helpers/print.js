const process = require('process')

/**
 * Print to stdout
 */
const print = (text, error) => error ? process.stderr.write(text) : process.stdout.write(text)

module.exports = print
