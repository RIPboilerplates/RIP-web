import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'

export default class Wrapper extends React.PureComponent {
  static defaultProps = {
    locale: 'en',
  }

  static propTypes = {
    locale:   PropTypes.string,
    children: PropTypes.any.isRequired,
  }

  render() {
    return (
      <IntlProvider locale={this.props.locale}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
