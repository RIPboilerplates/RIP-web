const fs = require('fs')
const path = require('path')
const replace = require('replace-in-file')
const changeCase = require('change-case')

const renameDirectory = (answers, config) => {
  const to = changeCase.pascal(config.to)

  if (!config.dir) throw Error('`dir` is required')
  if (!config.from) throw Error('`from` is required')
  if (!to) throw Error('`to` is required')

  const base = path.join(__dirname, '../../../app/', config.dir)
  const fromPath = path.join(base, config.from)
  const toPath = path.join(base, to)

  try {
    fs.renameSync(fromPath, toPath)
  } catch (e) {
    throw e
  }

  return `${fromPath} => ${toPath}`
}

const renameInFiles = (answers, config) =>
  new Promise((resolve, reject) => {
    const to = changeCase.pascal(config.to)

    if (!config.from) throw Error('`from` is required')
    if (!to) throw Error('`to` is required')

    const appDir = path.join(__dirname, '../../../app/**/*.js')

    let changes = []
    try {
      changes = replace.sync({
        files: appDir,
        from:  new RegExp(config.from, 'g'),
        to,
      })
    } catch (e) {
      reject(e)
    }

    if (!changes.length) {
      reject(Error('No files changed'))
    }

    const spacer = '\n          '
    resolve(`${spacer}${changes.join(spacer)}`)
  })

module.exports = {
  renameInFiles,
  renameDirectory,
}
