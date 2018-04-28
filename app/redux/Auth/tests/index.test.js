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

  beforeEach(() => {
    dispatch = jest.fn()
    result = null
  })

  describe('signInAction', () => {
    it('dispatches correctly', () => {
      signInAction()(dispatch)

      result = {
        type: SIGN_IN,
      }
      expect(dispatch).toHaveBeenCalledWith(result)
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
