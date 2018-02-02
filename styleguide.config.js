const path = require('path')
const { version } = require('./package.json')
const webpackConfig = require('./internals/webpack/webpack.dev.babel')

/* eslint-disable key-spacing */
module.exports = {
  title: `Tela React Boilerplate\nStyleguidist | ${version}`,
  webpackConfig,
  sections: [
    {
      name: 'Containers',
      components: 'app/containers/*/component.js',
    },
    {
      name: 'Components',
      components: 'app/components/*/component.js',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, './app/utils/wrapperIntl'),
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/component\.js/, 'examples.md')
  },
}
/* eslint-enable key-spacing */
