import navigateTo, {
  goTo,
  setRedirectUrlAction,
} from '../'

import {
  SET_REDIRECT_URL,
} from '../constants'

jest.mock('utils/history')
jest.mock('react-router-redux')

describe('Navigation Actions', () => {
  let dispatch
  let result
  let getIn

  const url = '/test'
  const getState = jest.fn(() => ({ getIn }))

  beforeEach(() => {
    dispatch = jest.fn()
    result = null
    getIn = null
  })

  describe('goTo', () => {
    it('dispatches correctly', () => {
      goTo(url)(dispatch)
      expect(dispatch).toHaveBeenCalled()
    })
  })

  describe('navigateTo', () => {
    it('dispatches correctly', () => {
      navigateTo.login()(dispatch)
      expect(dispatch).toHaveBeenCalled()
    })
  })

  describe('setRedirectUrlAction', () => {
    it('dispatches correctly', () => {
      getIn = jest.fn(() => url)
      setRedirectUrlAction()(dispatch, getState)

      result = {
        type:    SET_REDIRECT_URL,
        payload: url,
      }
      expect(dispatch).toHaveBeenCalledWith(result)
    })

    it('for route that cannot be redirected to', () => {
      getIn = jest.fn(() => '/login')
      setRedirectUrlAction()(dispatch, getState)

      result = {
        type:    SET_REDIRECT_URL,
        payload: '/',
      }
      expect(dispatch).toHaveBeenCalledWith(result)
    })
  })
})
