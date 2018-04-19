import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

// Add constants needed in default state for testing
import { INITIAL_STATE as nav } from 'redux/Navigation/constants'
import { INITIAL_STATE as auth } from 'redux/Auth/constants'

const defaultState = {
  nav,
  auth,
}
export { defaultState }

export default (initialState) => {
  const mockStore = configureStore([thunk])

  return mockStore(fromJS(initialState || defaultState))
}
