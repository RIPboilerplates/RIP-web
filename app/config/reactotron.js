import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import Config from './debug'

if (Config.useReactotron) {
  Reactotron
    .configure({ name: 'TelaClaims' }) // , host: '192.168.90.104' })
    .use(reactotronRedux())
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-js
  // on every file.  This is just DEV mode, so no big deal.
  /* eslint-disable no-console */
  console.tron = Reactotron
  console.tron.log('Starting Web App')
  /* eslint-enable no-console */
}
