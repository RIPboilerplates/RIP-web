import mockStore from '../mockStore'

describe('mockStore', () => {
  it('returns a valid store', () => {
    const store = mockStore()
    expect(typeof store).toEqual('object')
  })

  it('returns a valid store with initial state', () => {
    const store = mockStore({ cool: true })
    expect(typeof store).toEqual('object')
  })
})
