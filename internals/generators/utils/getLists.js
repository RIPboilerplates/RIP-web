const fs = require('fs')
const path = require('path')
const root = __dirname
const basePath = '../../../app/'

/**
 * folderList
 *
 * Get array of directories
 * @param {string} sub directory of app/ Ex: component, container, redux, navigation
 * @return {array} list of all directories in the requested sub dir
 */
const folderList = (subDir) => fs.readdirSync(path.join(root, basePath, subDir))

module.exports = {
  folderList,
}
