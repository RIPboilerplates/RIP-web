import React from 'react'
// import PropTypes from 'prop-types'
import Navigation from 'navigation'

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

  render() {
    return (
      <Styled.Container>
        <Navigation />
      </Styled.Container>
    )
  }
}

App.propTypes = {
  // prop types
}

export default App
