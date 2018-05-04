const Add = require('./add.js')
const Modify = require('./modify.js')
const Remove = require('./remove.js')

const { delLine } = require('../utils/removeActions.js')

/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setActionType('del-line', delLine)
  plop.setGenerator('add', Add)
  plop.setGenerator('modify', Modify)
  plop.setGenerator('remove', Remove)
}
