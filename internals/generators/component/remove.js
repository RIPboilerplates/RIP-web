const { componentsList } = require('../utils/components')

module.exports = {
  description: 'Remove a component',
  prompts:     [{
    type:    'list',
    name:    'name',
    message: 'Which component',
    choices: componentsList,
  }],
  actions: (data) => [{
    type: 'delete-line',
    file: 'app/components/index.js',
    key:  `export ${data.name} from './${data.name}'`,
  }, {
    type:      'delete-directory',
    directory: `app/components/${data.name}`,
  }],
}
