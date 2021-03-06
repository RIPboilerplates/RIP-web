/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from 'utils/history'

import FontFaceObserver from 'fontfaceobserver'
import 'sanitize.css/sanitize.css'

// Import root app
import App from 'containers/App'

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider'

// Import CSS reset and Global Styles
import 'themes/global-styles'

// Load the favicon, the manifest.json file and the .htaccess file
import '!file-loader?name=[name].[ext]!assets/images/favicons/favicon.ico'
import 'file-loader?name=[name].[ext]!./.htaccess' // eslint-disable-line import/extensions

import configureStore from 'store'

// Import i18n messages
import { translationMessages } from 'i18n'

// Import config
import Config from 'config/debug'

// Observe loading of font (to remove, remove the <link> tag in
// the index.html file and this observer)
const fontObserver = new FontFaceObserver('Open Sans', {})

// When Font is loaded, add a font-family using global-stype
fontObserver.load().then(() => {
  document.body.classList.add('fontLoaded')
})

// Create redux store with history
const initialState = {}

const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app')

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'))
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err
    })
} else {
  render(translationMessages)
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (Config.isProd) {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
