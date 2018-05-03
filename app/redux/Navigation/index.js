import { push } from 'react-router-redux'
import Routes from 'navigation/constants'

export const goTo = (url) => (dispatch) => dispatch(push(url))

const makeFunctions = () => {
  const goToFunctions = {}

  Object.keys(Routes).forEach((key) => {
    goToFunctions[key] = () => goTo(Routes[key])
  })

  return goToFunctions
}

export default makeFunctions()
