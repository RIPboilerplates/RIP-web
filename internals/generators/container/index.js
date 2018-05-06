const Add = require('./add.js')
const Rename = require('./rename.js')
const Remove = require('./remove.js')

const insertToPlop = require('../utils/insertToPlop')

/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setPlopfilePath(`${__dirname}/../`)
  insertToPlop(plop)

  plop.setGenerator('add', Add)
  plop.setGenerator('rename', Rename)
  plop.setGenerator('remove', Remove)
}
