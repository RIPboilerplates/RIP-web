import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

// Add constants needed in default state for testing
import { INITIAL_STATE as nav } from 'redux/Navigation/constants'

const defaultState = {
  nav,
}
export { defaultState }

export default (initialState) => {
  const mockStore = configureStore([thunk])

  return mockStore(fromJS(initialState || defaultState))
}
