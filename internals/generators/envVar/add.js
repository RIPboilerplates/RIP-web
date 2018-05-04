/* eslint strict: ["off"] */

'use strict'

const { envVarExists } = require('../utils/envVars')

/**
 * Env Vars Generator
 */
module.exports = {
  description: 'Add an environment variable',
  prompts:     [{
    type:     'input',
    name:     'name',
    message:  'What is the the variable name:',
    default:  'TEST',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return envVarExists(value) ? 'That environment variable already exists' : true
      }

      return 'The variable name is required'
    },
  }, {
    type:    'input',
    name:    'value',
    message: 'What is the the variable value:',
    default: 'TEST',
  }],
  actions: [{
    type:        'append',
    path:        '../../internals/webpack/webpack.base.babel.js',
    pattern:     /(NODE_ENV: JSON\.stringify\(process\.env\.NODE_ENV\),)/,
    template:    '        {{constantCase name}}: JSON.stringify(process.env.{{constantCase name}}),',
    abortOnFail: true,
  }, {
    type:        'modify',
    path:        '../../.env',
    pattern:     /([\s\S]*)/,
    template:    '$1{{constantCase name}}={{value}}\n',
    abortOnFail: true,
  }],
}
