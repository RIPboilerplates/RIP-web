const { componentsList } = require('../utils/components')

module.exports = {
  description: 'Rename a component',
  prompts:     [{
    type:    'list',
    name:    'from',
    message: 'Which component',
    choices: componentsList,
  }, {
    type:    'input',
    name:    'to',
    message: 'The new name',
  }],
  actions: (data) => {
    const { from, to } = data
    const props = { abortOnFail: true, from, to }

    return [{
      type: 'rename-in-files',
      ...props,
    }, {
      type: 'rename-directory',
      dir:  'components',
      ...props,
    }]
  },
}
