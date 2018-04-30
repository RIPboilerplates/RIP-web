const EnvAdd = require('./add/index.js')
const EnvModify = require('./modify/index.js')
const EnvRemove = require('./remove/index.js')

const { delLine } = require('../utils/removeActions.js')

/**
 * generator/index.js
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
