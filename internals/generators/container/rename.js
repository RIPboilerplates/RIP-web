const { containersList } = require('../utils/components')

module.exports = {
  description: 'Rename a container',
  prompts:     [{
    type:    'list',
    name:    'from',
    message: 'Which container',
    choices: containersList,
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
      dir:  'containers',
      ...props,
    }]
  },
}
