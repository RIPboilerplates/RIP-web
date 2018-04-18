const fs = require('fs')
const path = require('path')
const componentGenerator = require('./component/index.js')
const containerGenerator = require('./container/index.js')
const languageGenerator = require('./language/index.js')
const reduxGenerator = require('./redux/index.js')
const constantsGenerator = require('./reduxConstant/index.js')
const routeGenerator = require('./route/index.js')

/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */
module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('route', routeGenerator)
  plop.setGenerator('redux', reduxGenerator)
  plop.setGenerator('redux constant', constantsGenerator)
  plop.setGenerator('language', languageGenerator)
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
