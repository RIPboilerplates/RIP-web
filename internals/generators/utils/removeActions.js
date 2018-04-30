const fs = require('fs')
const path = require('path')

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

module.exports = {
  delLine,
}
