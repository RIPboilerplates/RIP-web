import { fromJS } from 'immutable'

import {
  DEFAULT_LOCALE,
} from 'config/locale'

import {
  CHANGE_LOCALE,
} from './constants'

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
})

/**
 * LanguageProvider reducer
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale)
    default:
      return state
  }
}
