import { push } from 'react-router-redux'
import Routes from 'navigation/constants'
import {
  SIGN_IN,
  SIGN_OUT,
} from './constants'

/**
 * Auth Action to perform Authenticate Anonymous
 */
export const signInAction = () => (dispatch, getState) => {
  dispatch({ type: SIGN_IN })
  dispatch(push(getState().getIn(['nav', 'redirectUrl'])))
}

/**
 * Auth Action to perform Sign Out
 */
export const signOutAction = () => (dispatch) => {
  dispatch({ type: SIGN_OUT })
  dispatch(push(Routes.login))
}
