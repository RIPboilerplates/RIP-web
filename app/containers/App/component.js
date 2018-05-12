import React from 'react'
import PropTypes from 'prop-types'
import MainNav from 'navigation'
import PublicNav from 'navigation/PublicRoutes'

import Styled from './styles'

/**
* App Component Description
*/
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillMount() {
    if (!this.props.loggedIn) this.props.setRedirectUrl()
  }

  render() {
    const { loggedIn } = this.props

    const Navigation = loggedIn ? MainNav : PublicNav
    return (
      <Styled.Container>
        <Navigation />
      </Styled.Container>
    )
  }
}

App.propTypes = {
  loggedIn:       PropTypes.bool.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
}

export default App
