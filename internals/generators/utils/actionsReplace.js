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

const renameInFiles = (answers, config) => {
  const to = changeCase.pascal(config.to)

  if (!config.dir) throw Error('`dir` is required')
  if (!config.from) throw Error('`from` is required')
  if (!to) throw Error('`to` is required')

  const base = path.join(__dirname, '../../../app/', config.dir)
  const fromPath = path.join(base, config.from)

  let changes = []
  try {
    changes = replace.sync({
      files: [
        `${fromPath}/*`,
        `${fromPath}/tests/*`,
        `${base}/index.js`,
      ],
      from: new RegExp(config.from, 'g'),
      to,
    })
  } catch (e) {
    throw e
  }

  const spacer = '\n          '
  return `${spacer}${changes.join(spacer)}`
}

module.exports = {
  renameInFiles,
  renameDirectory,
}
