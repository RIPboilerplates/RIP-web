/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

/**
 * Creates the main reducer with the dynamically injected ones
 */
/* eslint-disable global-require */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: require('redux/navigation/reducer').reducer,
    language: require('redux/language/reducer').reducer,
    ...injectedReducers,
  });
}
/* eslint-enable global-require */
