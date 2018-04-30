const fs = require('fs')
const path = require('path')
const componentGenerator = require('./component/index.js')
const containerGenerator = require('./container/index.js')
const languageGenerator = require('./language/index.js')
const reduxGenerator = require('./redux/index.js')
const constantsGenerator = require('./reduxConstant/index.js')
const routeGenerator = require('./route/index.js')
const envVarGenerator = require('./envVar/add/index.js')
const EnvVarRemove = require('./envVar/remove/index.js')

const { delLine } = require('./utils/removeActions.js')

/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setActionType('del-line', delLine)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('route', routeGenerator)
  plop.setGenerator('redux', reduxGenerator)
  plop.setGenerator('redux constant', constantsGenerator)
  plop.setGenerator('language', languageGenerator)
  plop.setGenerator('add env var', envVarGenerator)
  plop.setGenerator('remove env var', EnvVarRemove)
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
