/* eslint strict: ["off"] */

'use strict'

const { envVarsList } = require('../utils/envVars')

const choices = envVarsList()
/**
 * Env Vars Generator
 */
module.exports = {
  description: 'Remove an environment variable',
  prompts:     [{
    type:    'list',
    name:    'name',
    message: 'Which variable',
    choices,
  }],
  actions: (data) => [{
    type: 'del-line',
    file: '.env',
    key:  `${data.name}=`,
  }, {
    type: 'del-line',
    file: 'internals/webpack/webpack.base.babel.js',
    key:  `JSON.stringify(process.env.${data.name})`,
  }],
}
