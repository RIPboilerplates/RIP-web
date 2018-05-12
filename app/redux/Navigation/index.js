import { push } from 'react-router-redux'
import Routes from 'navigation/constants'

import { SET_REDIRECT_URL } from './constants'

export const goTo = (url) => (dispatch) => dispatch(push(url))

const makeFunctions = () => {
  const goToFunctions = {}

  Object.keys(Routes).forEach((key) => {
    goToFunctions[key] = () => goTo(Routes[key])
  })

  return goToFunctions
}

export default makeFunctions()

/**
 * Navigation Action to perform Set Redirect Url
 */
export const setRedirectUrlAction = () => (dispatch, getState) => {
  const currentUrl = getState().getIn(['nav', 'location', 'pathname'])

  const invalidRoutes = [Routes.login, Routes.splash, Routes.signup]
  const redirectUrl = invalidRoutes.indexOf(currentUrl) > -1 ? Routes.root : currentUrl

  dispatch({
    type:    SET_REDIRECT_URL,
    payload: redirectUrl,
  })
}
