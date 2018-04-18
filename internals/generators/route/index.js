/* eslint strict: ["off"] */

'use strict'

const routeExists = require('../utils/routeExists')

/**
 * Route Generator
 */
module.exports = {
  description: 'Add a new route file',
  prompts:     [{
    type:     'input',
    name:     'name',
    message:  'What should it be called?',
    default:  'Route',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return routeExists(value) ? 'A route with this name already exists' : true
      }

      return 'The name is required'
    },
  }],
  actions: [{
    type:         'add',
    path:         '../../app/navigation/{{properCase name}}.js',
    templateFile: './route/route.js.hbs',
    abortOnFail:  true,
  }, {
    type:         'add',
    path:         '../../app/navigation/tests/{{properCase name}}.test.js',
    templateFile: './route/route.test.js.hbs',
    abortOnFail:  true,
  }],
}
