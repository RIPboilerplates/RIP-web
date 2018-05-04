const Add = require('./add.js')
const Modify = require('./modify.js')
const Remove = require('./remove.js')

const { delLine, delDir } = require('../utils/actionsRemove.js')

/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setPlopfilePath(`${__dirname}/../`)
  plop.setActionType('delete-line', delLine)
  plop.setActionType('delete-directory', delDir)
  plop.setGenerator('add', Add)
  plop.setGenerator('modify', Modify)
  plop.setGenerator('remove', Remove)
}
