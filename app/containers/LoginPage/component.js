import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import messages from './messages'
import Styled from './styles'

/**
* LoginPage Component Description
*/
class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { intl, signInAction } = this.props

    return (
      <Styled.Container>
        <Helmet>
          <title>{intl.formatMessage(messages.pageTitle)}</title>
          <meta name={'description'} content={intl.formatMessage(messages.pageDescription)} />
        </Helmet>
        <button onClick={signInAction}>
          <h1><FormattedMessage {...messages.button} /></h1>
        </button>
      </Styled.Container>
    )
  }
}

LoginPage.propTypes = {
  intl:         intlShape.isRequired,
  signInAction: PropTypes.func.isRequired,
}

export default injectIntl(LoginPage)
