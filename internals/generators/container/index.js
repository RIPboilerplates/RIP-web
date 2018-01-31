/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists')

module.exports = {
  description: 'Add a container component',
  prompts:     [{
    type:    'list',
    name:    'type',
    message: 'Select the base component type:',
    default: 'React.Component',
    choices: () => ['React.Component', 'React.PureComponent'],
  }, {
    type:     'input',
    name:     'name',
    message:  'What should it be called?',
    default:  'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true
      }

      return 'The name is required'
    },
  }, {
    type:    'confirm',
    name:    'wantHeaders',
    default: false,
    message: 'Do you want headers (i.e. is this a page container)?',
  }, {
    type:    'confirm',
    name:    'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }, {
    type:    'confirm',
    name:    'wantLoadable',
    default: true,
    message: 'Do you want to load resources asynchronously?',
  }],
  actions: (data) => {
    const actions = [{
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/styles.js',
      templateFile: './container/styles.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/component.js',
      templateFile: './container/class.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/tests/component.test.js',
      templateFile: './container/component.test.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/selectors.js',
      templateFile: './container/selectors.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/tests/selectors.test.js',
      templateFile: './container/selectors.test.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'modify',
      path:         '../../app/containers/index.js',
      pattern:      /([\s\S]*)/,
      templateFile: './container/component-export.hbs',
      abortOnFail:  true,
    }]

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type:         'add',
        path:         '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail:  true,
      })
    }

    return actions
  },
}
