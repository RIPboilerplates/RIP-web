import React from 'react'
import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Styled from './styles'

/**
* Button Component Description
*/
const Button = ({ action }) => { // eslint-disable-line arrow-body-style
  return (
    <Styled.Container onClick={action}>
      <FormattedMessage {...messages.button} />
    </Styled.Container>
  )
}

Button.propTypes = {
  action: PropTypes.func,
}

export default Button
