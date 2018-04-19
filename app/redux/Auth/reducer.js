import { fromJS } from 'immutable'
import {
  SIGN_IN,
  SIGN_OUT,
  INITIAL_STATE,
} from './constants'

/**
 * Merge Auth into the global application state
 */
export const reducer = (state = fromJS(INITIAL_STATE), action) => {
  switch (action.type) {
    case SIGN_IN:
      return state
        .set('authenticated', true)
    case SIGN_OUT:
      return state
        .set('authenticated', false)
    default:
      return state
  }
}
