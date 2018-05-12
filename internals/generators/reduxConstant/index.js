const checks = require('../utils/constantChecks')

/**
 * Redux Constants Generator
 */
module.exports = {
  description: 'Add a set of redux constants/reducers/action/thunk',
  prompts:     [{
    type:     'input',
    name:     'name',
    default:  'Auth',
    message:  'What reduxer should the changes be added to?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return checks.reducerExists(value) ? 'A reduxer with that name does not already exists, use redux generator to add reduxer' : true
      }

      return 'The reduxer is required'
    },
  }, {
    type:     'input',
    name:     'actionName',
    default:  'DEFAULT_ACTION',
    message:  'What should the constant be named?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return checks.constantExists(value) ? 'A constant with that name already exists' : true
      }

      return 'The constant is required'
    },
  }, {
    type:    'confirm',
    name:    'isAsync',
    default: true,
    message: 'Will the action dispatch an async thunk?',
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
    choices: () => ['null', "''", '{}', '[]', 'false', 'true'],
  }],
  actions: (data) => {
    console.log(data.defaultValue) // eslint-disable-line no-console
    const actions = [{
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/constants.js',
      pattern:      /(\/\*\seslint-enable no-multi-spaces\s\*\/\n)(?!\/\*\seslint-enable no-multi-spaces\s\*\/)/g,
      templateFile: './reduxConstant/constants.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/constants.js',
      pattern:      /(export const INITIAL_STATE = {)/,
      templateFile: './reduxConstant/default-state.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/index.js',
      pattern:      /(}\sfrom\s'.\/constants'\n)(?!}\sfrom\s'.\/constants')/,
      templateFile: './reduxConstant/import-constant.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/index.js',
      pattern:      /([\s\S]*)/,
      templateFile: './reduxConstant/action.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/reducer.js',
      pattern:      /([ \t]+INITIAL_STATE,\n)(?![ \t]+INITIAL_STATE,)/,
      templateFile: './reduxConstant/import-constants.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/reducer.js',
      pattern:      /([ \t]+default:\n)(?![ \t]+default:)/,
      templateFile: './reduxConstant/reducer.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/tests/index.test.js',
      pattern:      /(}\sfrom\s'..\/'\n)(?!}\sfrom\s'..\/')/,
      templateFile: './reduxConstant/import-action.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/tests/index.test.js',
      pattern:      /(}\sfrom\s'..\/constants'\n)(?!}\sfrom\s'..\/constants')/,
      templateFile: './reduxConstant/import-constant.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/tests/index.test.js',
      pattern:      /(^}\)$)/gm,
      templateFile: './reduxConstant/test-action.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/tests/reducer.test.js',
      pattern:      /([ \t]+INITIAL_STATE,\n)(?![ \t]+INITIAL_STATE,)/,
      templateFile: './reduxConstant/import-constants.hbs',
    }, {
      type:         'modify',
      path:         '../../app/redux/{{properCase name}}/tests/reducer.test.js',
      pattern:      /(^}\)$)/gm,
      templateFile: './reduxConstant/test-reducer.hbs',
    }]

    if (data.isAsync) {
      actions.push({
        type:         'modify',
        path:         '../../app/redux/{{properCase name}}/index.js',
        pattern:      /(}\sfrom\s'.\/thunks'\n)(?!}\sfrom\s'.\/thunks')/,
        templateFile: './reduxConstant/import-thunk.hbs',
      })

      actions.push({
        type:         'modify',
        path:         '../../app/redux/{{properCase name}}/thunks.js',
        pattern:      /([\s\S]*)/,
        templateFile: './reduxConstant/thunk.hbs',
      })

      actions.push({
        type:         'modify',
        path:         '../../app/redux/{{properCase name}}/tests/thunks.test.js',
        pattern:      /(}\sfrom\s'..\/thunks'\n)(?!}\sfrom\s'..\/thunks')/,
        templateFile: './reduxConstant/import-thunk.hbs',
      })

      actions.push({
        type:         'modify',
        path:         '../../app/redux/{{properCase name}}/tests/thunks.test.js',
        pattern:      /(^}\)$)/gm,
        templateFile: './reduxConstant/test-thunk.hbs',
      })

      actions.push({
        type:         'modify',
        path:         '../../app/redux/{{properCase name}}/tests/index.test.js',
        pattern:      /(^}\)\)$)/m,
        templateFile: './reduxConstant/mock-thunk.hbs',
      })
    }

    return actions
  },
}
