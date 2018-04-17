import { fromJS } from 'immutable'
import {
  INITIAL_STATE,
  LOCATION_CHANGE,
} from './constants'

const initialState = fromJS(INITIAL_STATE)

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */
/**
 * Merge route into the global application state
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      })
    default:
      return state
  }
}
