import {
  signInThunk,
  signOutThunk,
} from '../thunks'

describe('Auth thunks', () => {
  describe('signInThunk', () => {
    it('resolves asynchronously', async () => {
      const response = await signInThunk()
      expect(response).toEqual('YAY!!')
    })
  })

  describe('signOutThunk', () => {
    it('resolves asynchronously', async () => {
      const response = await signOutThunk()
      expect(response).toEqual('YAY!!')
    })
  })
})
