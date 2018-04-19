import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HomePage,
  NotFoundPage,
} from 'containers'

import Routes from './constants'

const RootNav = () => (
  <Switch>
    <Route exact path={Routes.home} component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default RootNav
