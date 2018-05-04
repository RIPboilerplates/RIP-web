const EnvAdd = require('./add.js')
const EnvModify = require('./modify.js')
const EnvRemove = require('./remove.js')

const { delLine } = require('../utils/removeActions.js')

/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setActionType('del-line', delLine)
  plop.setGenerator('add', EnvAdd)
  plop.setGenerator('modify', EnvModify)
  plop.setGenerator('remove', EnvRemove)
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
}
