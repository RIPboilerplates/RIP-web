import React from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import {
  LoginPage,
} from 'containers'

import Routes from './constants'

const PublicRoutes = () => (
  <Switch>
    <Route path={Routes.login} component={LoginPage} />
    <Redirect to={Routes.login} />
  </Switch>
)

PublicRoutes.propTypes = {
  // PublicRoutes props
}

export default PublicRoutes
