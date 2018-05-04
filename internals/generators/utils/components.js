/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs')
const path = require('path')

const componentsList = fs.readdirSync(path.join(__dirname, '../../../app/components'))
const containersList = fs.readdirSync(path.join(__dirname, '../../../app/containers'))

componentsList.pop()
containersList.pop()

const components = componentsList.concat(containersList)

const componentExists = (comp) => components.indexOf(comp) >= 0

module.exports = {
  componentExists,
  componentsList,
  containersList,
}
