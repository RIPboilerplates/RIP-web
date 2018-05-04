const fs = require('fs')
const path = require('path')
// Components
const ComponentAdd = require('./component/add')
const ComponentRename = require('./component/rename')
const ComponentRemove = require('./component/remove')

const containerGenerator = require('./container/index.js')
const languageGenerator = require('./language/index.js')
const reduxGenerator = require('./redux/index.js')
const constantsGenerator = require('./reduxConstant/index.js')
const routeGenerator = require('./route/index.js')
// Env Vars
const EnvVarAdd = require('./envVar/add.js')
const EnvVarModify = require('./envVar/modify.js')
const EnvVarRemove = require('./envVar/remove.js')

const { delLine, delDir } = require('./utils/actionsRemove.js')
const { renameDirectory, renameInFiles } = require('./utils/actionsReplace')

/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setActionType('delete-line', delLine)
  plop.setActionType('delete-directory', delDir)
  plop.setActionType('rename-in-files', renameInFiles)
  plop.setActionType('rename-directory', renameDirectory)
  plop.setGenerator('component - add', ComponentAdd)
  plop.setGenerator('component - rename', ComponentRename)
  plop.setGenerator('component - remove', ComponentRemove)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('route', routeGenerator)
  plop.setGenerator('redux', reduxGenerator)
  plop.setGenerator('redux constant', constantsGenerator)
  plop.setGenerator('language', languageGenerator)
  plop.setGenerator('env var - add', EnvVarAdd)
  plop.setGenerator('env var - modify', EnvVarModify)
  plop.setGenerator('env var - remove', EnvVarRemove)
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
