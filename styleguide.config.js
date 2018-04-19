const path = require('path')
const { version, name } = require('./package.json')
const webpackConfig = require('./internals/webpack/webpack.dev.babel')

/* eslint-disable key-spacing */
module.exports = {
  title: `${name}\n${version}\nStyle guide`,
  webpackConfig,
  sections: [
    {
      name: 'Containers',
      components: 'app/containers/*/component.js',
      ignore: [
        '**/App/**',
        '**/*Provider/**',
      ],
    },
    {
      name: 'Components',
      components: 'app/components/*/component.js',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, './app/utils/styleguidistWrapper'),
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/component\.js/, 'examples.md')
  },
}
/* eslint-enable key-spacing */
