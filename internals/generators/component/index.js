/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../utils/componentExists')

module.exports = {
  description: 'Add an unconnected component',
  prompts:     [{
    type:    'list',
    name:    'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'React.Component', 'React.PureComponent'],
  }, {
    type:     'input',
    name:     'name',
    message:  'What should it be called?',
    default:  'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true
      }

      return 'The name is required'
    },
  }, {
    type:    'confirm',
    name:    'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  // }, {
  //   type:    'confirm',
  //   name:    'wantLoadable',
  //   default: false,
  //   message: 'Do you want to load the component asynchronously (i.e. action needed to display this)?',
  }],
  actions: (data) => {
    data.directory = 'component' // eslint-disable-line no-param-reassign

    // Temporarily removing loadable for simpler gsd
    data.wantLoadable = false // eslint-disable-line no-param-reassign

    // Generate index.js and index.test.js
    let componentTemplate
    let indexTemplate

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs'
        break
      }
      default: {
        componentTemplate = './component/class.js.hbs'
      }
    }

    // If want Loadable.js to load the component asynchronously
    switch (data.wantLoadable) {
      case true: {
        indexTemplate = './component/loadable.js.hbs'
        break
      }
      default: {
        indexTemplate = './component/index.js.hbs'
        break
      }
    }

    const actions = [{
      type:         'add',
      path:         '../../app/components/{{properCase name}}/index.js',
      templateFile: indexTemplate,
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/components/{{properCase name}}/component.js',
      templateFile: componentTemplate,
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/components/{{properCase name}}/tests/component.test.js',
      templateFile: './shared/component.test.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/components/{{properCase name}}/styles.js',
      templateFile: './shared/styles.js.hbs',
      abortOnFail:  true,
    }, {
      type:         'add',
      path:         '../../app/components/{{properCase name}}/examples.md',
      templateFile: './shared/examples.md.hbs',
      abortOnFail:  true,
    }, {
      type:         'modify',
      path:         '../../app/components/index.js',
      pattern:      /([\s\S]*)/,
      templateFile: './component/component-export.hbs',
    }]

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type:         'add',
        path:         '../../app/components/{{properCase name}}/messages.js',
        templateFile: './shared/messages.js.hbs',
        abortOnFail:  true,
      })
    }

    return actions
  },
}
