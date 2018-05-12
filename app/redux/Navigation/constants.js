/**
 * Navigation constants
 */
/* eslint-disable no-multi-spaces */
const PREFIX = 'NAVIGATION' // eslint-disable-line no-unused-vars
export { LOCATION_CHANGE } from 'react-router-redux'

export const SET_REDIRECT_URL = `${PREFIX}/SET_REDIRECT_URL`
/* eslint-enable no-multi-spaces */

export const INITIAL_STATE = {
  redirectUrl: '',
  location:    null,
}
