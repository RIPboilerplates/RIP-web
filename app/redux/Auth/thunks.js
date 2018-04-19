/**
 * Auth to perform async Sign In
 */
export const signInThunk = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('YAY!!'), 500)
  })


/**
 * Auth to perform async Sign Out
 */
export const signOutThunk = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('YAY!!'), 500)
  })
