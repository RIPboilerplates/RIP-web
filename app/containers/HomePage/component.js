import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Styled from './styles'

/**
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Styled.Container>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </Styled.Container>
    )
  }
}
