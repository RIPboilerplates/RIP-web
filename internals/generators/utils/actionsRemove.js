const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const print = require('../../scripts/helpers/print')

const delLine = (answers, config) => {
  const filePath = path.join(__dirname, '../../../', config.file)

  if (!config.file) throw Error('`file` is required')
  if (!config.key) throw Error('`key` is required')
  if (!fs.existsSync(filePath)) throw Error('file does not exist')

  const fileText = fs.readFileSync(filePath).toString().split('\n')
  const editedText = fileText.filter((line) => line.indexOf(config.key) < 0)

  fs.writeFileSync(filePath, editedText.join('\n'))
  return filePath.toString()
}

const delDir = (answers, config) => {
  const filePath = path.join(__dirname, '../../../', config.directory)

  if (!config.directory) throw Error('`directory` is required')
  if (!fs.existsSync(filePath)) throw Error('directory does not exist')

  const cmd = `if [ -d "${filePath}" ]; then rm -fr ${filePath}; fi`
  exec(cmd, (err, result, stderr) => {
    if (err || stderr) {
      throw err || stderr
    }
    print(result)
  })

  return filePath
}

module.exports = {
  delLine,
  delDir,
}
