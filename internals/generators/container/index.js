const componentExists = require('../utils/componentExists')

/**
 * Container Generator
 */
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
    default: true,
    message: 'Do you want headers (i.e. is this a page container)?',
  }, {
    type:    'confirm',
    name:    'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }, {
    type:    'confirm',
    name:    'wantReselect',
    default: false,
    message: 'Do you want an selector for this container (i.e. will the redux state be large/complex)?',
  }],
  actions: (data) => {
    data.directory = 'container' // eslint-disable-line no-param-reassign

    const actions = [{
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/styles.js',
      templateFile: './shared/styles.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/component.js',
      templateFile: './container/class.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/tests/component.test.js',
      templateFile: './shared/component.test.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/containers/{{properCase name}}/examples.md',
      templateFile: './shared/examples.md.hbs',
      abortOnFail:  true,
    }, {
      type:         'modify',
      path:         '../../app/containers/index.js',
      pattern:      /([\s\S]*)/,
      templateFile: './container/component-export.hbs',
      abortOnFail:  true,
    }]

    // Reselect
    if (data.wantReselect) {
      actions.push({
        type:         'add',
        path:         '../../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail:  true,
      })
      actions.push({
        type:         'add',
        path:         '../../app/containers/{{properCase name}}/tests/selectors.test.js',
        templateFile: './container/selectors.test.js.hbs',
        abortOnFail:  true,
      })
    }

    // Messages
    if (data.wantMessages) {
      actions.push({
        type:         'add',
        path:         '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './shared/messages.js.hbs',
        abortOnFail:  true,
      })
    }

    return actions
  },
}
