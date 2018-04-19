import {
  signInAction,
  signOutAction,
} from '../'

import {
  SIGN_IN,
  SIGN_OUT,
} from '../constants'

let dispatch
let result

beforeEach(() => {
  dispatch = jest.fn()
  result = null
})

describe('Auth actions', () => {
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
