import navigateTo, { goTo } from '../'

jest.mock('utils/history')
jest.mock('react-router-redux')

describe('Navigation Actions', () => {
  const url = '/test'

  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
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
})
