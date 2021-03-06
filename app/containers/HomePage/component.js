import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { Button } from 'components'
import messages from './messages'
import Styled from './styles'

/**
* HomePage Component Description
*/
class HomePage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { intl, signOutAction } = this.props

    return (
      <Styled.Container>
        <Helmet>
          <title>{intl.formatMessage(messages.pageTitle)}</title>
          <meta name={'description'} content={intl.formatMessage(messages.pageDescription)} />
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Button action={signOutAction} />
      </Styled.Container>
    )
  }
}

HomePage.propTypes = {
  intl:          intlShape.isRequired,
  signOutAction: PropTypes.func.isRequired,
}

export default injectIntl(HomePage)
