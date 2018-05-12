import { fromJS } from 'immutable'
import { reducer } from '../reducer'
import {
  LOCATION_CHANGE,
  SET_REDIRECT_URL,
  INITIAL_STATE,
} from '../constants'

describe('navigation reducer', () => {
  let initialState
  let result
  let store

  beforeEach(() => {
    initialState = { ...INITIAL_STATE }
    result = { ...INITIAL_STATE }
    store = null
  })

  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(result)
  })

  it('returns state for LOCATION_CHANGE', () => {
    const payload = 'test-location'
    result.location = payload

    store = reducer(fromJS(initialState), { type: LOCATION_CHANGE, payload })
    expect(store.toJS()).toEqual(result)
  })

  it('returns state for SET_REDIRECT_URL', () => {
    result.redirectUrl = '/route'

    store = reducer(fromJS(initialState), { type: SET_REDIRECT_URL, payload: '/route' })
    expect(store.toJS()).toEqual(result)
  })
})

