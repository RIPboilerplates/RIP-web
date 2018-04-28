const reduxExists = require('../utils/reduxExists')

/**
 * Redux Generator
 */
module.exports = {
  description: 'Add a redux container',
  prompts:     [{
    type:     'input',
    name:     'name',
    message:  'What should it be called?',
    default:  'Auth',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return reduxExists(value) ? 'A redux container with this name already exists' : true
      }

      return 'The name is required'
    },
  }, {
    type:    'input',
    name:    'actionName',
    message: 'Enter a name for the default action',
    default: 'DEFAULT_ACTION',
  }, {
    type:    'input',
    name:    'stateVariable',
    message: 'What variable in state should the data be stored in:',
    default: 'value',
  }, {
    type:    'list',
    name:    'defaultValue',
    message: 'What type of empty value should the variables default value be:',
    default: 'null',
    choices: () => ['null', '\'\'', '{}', '[]', 'false', 'true'],
  }],
  actions: [{
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/index.js',
    templateFile: './redux/index.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/tests/index.test.js',
    templateFile: './redux/index.test.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/constants.js',
    templateFile: './redux/constants.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/reducer.js',
    templateFile: './redux/reducer.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/tests/reducer.test.js',
    templateFile: './redux/reducer.test.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/thunks.js',
    templateFile: './redux/thunks.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/redux/{{properCase name}}/tests/thunks.test.js',
    templateFile: './redux/thunks.test.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'modify',
    path:         '../../app/reducers.js',
    pattern:      /(\.\.\.injectedReducers,\n)/,
    templateFile: './redux/modify-reducers.hbs',
    abortOnFail:  true,
  }],
}
