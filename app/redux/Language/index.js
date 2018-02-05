import {
  CHANGE_LOCALE,
} from './constants'

/**
 * LanguageProvider actions
 */
export const changeLocale = (languageLocale) => ({
  type:   CHANGE_LOCALE,
  locale: languageLocale,
})
