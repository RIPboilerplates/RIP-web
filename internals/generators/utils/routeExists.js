/**
 * routeExists
 *
 * Check whether the given route exist in the navigation directory
 */

const fs = require('fs')
const path = require('path')
const routeFiles = fs.readdirSync(path.join(__dirname, '../../../app/navigation'))
routeFiles.push('Route.js')
routeFiles.push('Routes.js')
routeFiles.push('Switch.js')

function routeExists(route) {
  return routeFiles.indexOf(`${route}.js`) >= 0
}

module.exports = routeExists
