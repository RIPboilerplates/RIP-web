/* eslint strict: ["off"] */

'use strict'

const { constantCase } = require('change-case')
const { envVarsList } = require('../utils/envVars')

const choices = envVarsList()

/**
 * Env Vars Generator
 */
module.exports = {
  description: 'Modify an environment variable',
  prompts:     [{
    type:    'list',
    name:    'name',
    message: 'Which environment variable',
    choices,
  }, {
    type:     'input',
    name:     'new',
    message:  'Updated environment variable (key=value):',
    validate: (value) => {
      if ((/.+/).test(value)) {
        const newVar = value.split('=')
        return (newVar.length !== 2 || !newVar[0]) ? 'A valid key=value is required' : true
      }

      return 'A valid environment key value pair is required'
    },
  }],
  actions: (data) => {
    const newVar = data.new.split('=')
    const key = constantCase(newVar[0])
    const value = newVar[1]

    return [{
      type: 'delete-line',
      file: '.env',
      key:  `${data.name}=`,
    }, {
      type: 'delete-line',
      file: 'internals/webpack/webpack.base.babel.js',
      key:  `JSON.stringify(process.env.${data.name})`,
    }, {
      type:        'append',
      path:        '../../../internals/webpack/webpack.base.babel.js',
      pattern:     /(NODE_ENV: JSON\.stringify\(process\.env\.NODE_ENV\),)/,
      template:    `        ${key}: JSON.stringify(process.env.${key}),`,
      abortOnFail: true,
    }, {
      type:        'modify',
      path:        '../../../.env',
      pattern:     /([\s\S]*)/,
      template:    `$1${key}=${value}\n`,
      abortOnFail: true,
    }]
  },
}
