import { push } from 'react-router-redux'
import {
  SIGN_IN,
  SIGN_OUT,
} from './constants'

/**
 * Auth Action to perform Authenticate Anonymous
 */
export const signInAction = () => (dispatch) => {
  dispatch({ type: SIGN_IN })
  dispatch(push('/'))
}

/**
 * Auth Action to perform Sign Out
 */
export const signOutAction = () => (dispatch) => {
  dispatch({ type: SIGN_OUT })
  dispatch(push('/login'))
}
