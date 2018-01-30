import { reducer } from '../reducer'
import {
  LOCATION_CHANGE,
} from '../constants'

describe('navigation reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS())
      .toEqual({
        location: null,
      })
  })

  it('changes the location', () => {
    const location = 'test-location'
    expect(reducer(undefined, { type: LOCATION_CHANGE, payload: location }).toJS())
      .toEqual({
        location,
      })
  })
})
