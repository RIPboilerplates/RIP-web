/**
 * Auth constants
 */
/* eslint-disable no-multi-spaces */
const PREFIX = 'AUTH'

export const SIGN_IN  = `${PREFIX}/SIGN_IN`
export const SIGN_OUT = `${PREFIX}/SIGN_OUT`
/* eslint-enable no-multi-spaces */

export const INITIAL_STATE = {
  fetching:      null,
  fetched:       null,
  error:         null,
  authenticated: false,
}
