import {
  signInAction,
  signOutAction,
} from '../'

import {
  SIGN_IN,
  SIGN_OUT,
} from '../constants'

describe('Auth actions', () => {
  let dispatch
  let result
  let getIn

  const getState = jest.fn(() => ({ getIn }))

  beforeEach(() => {
    dispatch = jest.fn()
    result = null
    getIn = null
  })

  describe('signInAction', () => {
    it('dispatches correctly', () => {
      getIn = jest.fn(() => '/test')

      signInAction()(dispatch, getState)

      result = {
        type: SIGN_IN,
      }
      expect(dispatch).toHaveBeenCalledWith(result)
      expect(getIn).toHaveBeenCalled()
    })
  })

  describe('signOutAction', () => {
    it('dispatches correctly', () => {
      signOutAction()(dispatch)

      result = {
        type: SIGN_OUT,
      }
      expect(dispatch).toHaveBeenCalledWith(result)
    })
  })
})
