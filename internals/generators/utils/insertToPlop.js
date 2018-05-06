const fs = require('fs')
const path = require('path')
const { delLine, delDir } = require('./actionsRemove.js')
const { renameDirectory, renameInFiles } = require('./actionsReplace')

const insertToPlop = (plop) => {
  // actions
  plop.setActionType('delete-line', delLine)
  plop.setActionType('delete-directory', delDir)
  plop.setActionType('rename-in-files', renameInFiles)
  plop.setActionType('rename-directory', renameDirectory)

  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../app/containers/${comp}`), fs.F_OK)
      return `containers/${comp}`
    } catch (e) {
      return `components/${comp}`
    }
  })
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
}

module.exports = insertToPlop
