const { containersList } = require('../utils/components')

module.exports = {
  description: 'Remove a container',
  prompts:     [{
    type:    'list',
    name:    'name',
    message: 'Which container',
    choices: containersList,
  }],
  actions: (data) => [{
    type: 'delete-line',
    file: 'app/containers/index.js',
    key:  `export ${data.name} from './${data.name}'`,
  }, {
    type:      'delete-directory',
    directory: `app/containers/${data.name}`,
  }],
}
