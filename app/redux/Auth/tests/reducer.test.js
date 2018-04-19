import { fromJS } from 'immutable'
import { reducer } from '../reducer'

import {
  SIGN_IN,
  SIGN_OUT,
  INITIAL_STATE,
} from '../constants'

describe('auth reducer', () => {
  let result
  let initialState
  let store
  // let payload
  beforeEach(() => {
    // payload = null
    store = null
    initialState = { ...INITIAL_STATE }
    result = { ...INITIAL_STATE }
  })

  // const setFetching = () => {
  //   result.fetching = true
  //   result.fetched = false
  // }
  //
  // const setFetched = () => {
  //   result.fetching = false
  //   result.fetched = true
  // }

  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(INITIAL_STATE)
  })

  it('returns state for SIGN_IN', () => {
    result.authenticated = true

    store = reducer(fromJS(initialState), { type: SIGN_IN })
    expect(store.toJS()).toEqual(result)
  })

  it('returns state for SIGN_OUT', () => {
    result.authenticated = false

    store = reducer(fromJS(initialState), { type: SIGN_OUT })
    expect(store.toJS()).toEqual(result)
  })
})
