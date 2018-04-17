import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
  HomePage,
  NotFoundPage,
} from 'containers'

import Routes from './constants'

const RootNav = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={Routes.home} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </ConnectedRouter>
)

RootNav.propTypes = {
  history: PropTypes.object.isRequired,
}

export default RootNav
