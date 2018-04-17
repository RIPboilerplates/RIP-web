import React from 'react'
import renderer from 'react-test-renderer'
// I18n rendering
import { IntlProvider } from 'react-intl'
import { shallowWithIntl, mountWithIntl } from 'enzyme-react-intl'
// Redux rendering
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import mockStore from './mockStore'
import history from './history'

const createComponentWithIntl = (children, props = { locale: 'en' }) =>
  renderer.create(
    <IntlProvider {...props}>
      {children}
    </IntlProvider>
  )

export const renderWithRouter = (children, store = mockStore({})) =>
  renderer.create(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  )

export const shallow = (Component) => shallowWithIntl(Component).first().shallow()
export const mount = (Component) => mountWithIntl(Component).mount()

export default createComponentWithIntl
