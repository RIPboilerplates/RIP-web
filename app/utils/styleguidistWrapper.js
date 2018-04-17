import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'

import { Provider } from 'react-redux'
import { defaultState } from './mockStore'

import configureStore from '../store'

export default class Wrapper extends React.PureComponent {
  static defaultProps = {
    locale: 'en',
  }

  static propTypes = {
    locale:   PropTypes.string,
    children: PropTypes.any.isRequired,
  }

  render() {
    const store = configureStore(defaultState)
    return (
      <Provider store={store}>
        <IntlProvider locale={this.props.locale}>
          {this.props.children}
        </IntlProvider>
      </Provider>
    )
  }
}
