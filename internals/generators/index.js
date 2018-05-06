const insertToPlop = require('./utils/insertToPlop')
// Components
const ComponentAdd = require('./component/add')
const ComponentRename = require('./component/rename')
const ComponentRemove = require('./component/remove')
// Containers
const ContainerAdd = require('./container/add')
const ContainerRename = require('./container/rename')
const ContainerRemove = require('./container/remove')


const languageGenerator = require('./language/index.js')
const reduxGenerator = require('./redux/index.js')
const constantsGenerator = require('./reduxConstant/index.js')
const routeGenerator = require('./route/index.js')
// Env Vars
const EnvVarAdd = require('./envVar/add.js')
const EnvVarModify = require('./envVar/modify.js')
const EnvVarRemove = require('./envVar/remove.js')


/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  insertToPlop(plop)
  // components
  plop.setGenerator('component - add', ComponentAdd)
  plop.setGenerator('component - rename', ComponentRename)
  plop.setGenerator('component - remove', ComponentRemove)
  // containers
  plop.setGenerator('container - add', ContainerAdd)
  plop.setGenerator('container - rename', ContainerRename)
  plop.setGenerator('container - remove', ContainerRemove)
  // routes
  plop.setGenerator('route', routeGenerator)
  // redux
  plop.setGenerator('redux', reduxGenerator)
  plop.setGenerator('redux constant', constantsGenerator)
  // language
  plop.setGenerator('language', languageGenerator)
  // env
  plop.setGenerator('env var - add', EnvVarAdd)
  plop.setGenerator('env var - modify', EnvVarModify)
  plop.setGenerator('env var - remove', EnvVarRemove)
}
