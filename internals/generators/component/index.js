const Add = require('./add.js')
const Rename = require('./rename.js')
const Remove = require('./remove.js')

const { delLine, delDir } = require('../utils/actionsRemove.js')
const { renameDirectory, renameInFiles } = require('../utils/actionsReplace')

/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setPlopfilePath(`${__dirname}/../`)
  plop.setActionType('rename-in-files', renameInFiles)
  plop.setActionType('rename-directory', renameDirectory)
  plop.setActionType('delete-line', delLine)
  plop.setActionType('delete-directory', delDir)
  plop.setGenerator('add', Add)
  plop.setGenerator('rename', Rename)
  plop.setGenerator('remove', Remove)
}
