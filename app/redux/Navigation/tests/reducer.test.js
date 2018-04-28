import { fromJS } from 'immutable'
import { reducer } from '../reducer'
import {
  INITIAL_STATE,
  LOCATION_CHANGE,
} from '../constants'

describe('navigation reducer', () => {
  let result
  let initialState

  beforeEach(() => {
    initialState = { ...INITIAL_STATE }
    result = { ...INITIAL_STATE }
  })

  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(result)
  })

  it('returns state for LOCATION_CHANGE', () => {
    const payload = 'test-location'
    result.location = payload

    const store = reducer(
      fromJS(initialState),
      { type: LOCATION_CHANGE, payload }
    )
    expect(store.toJS()).toEqual(result)
  })
})
