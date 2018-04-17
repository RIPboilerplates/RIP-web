import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

/**
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    )
  }
}
