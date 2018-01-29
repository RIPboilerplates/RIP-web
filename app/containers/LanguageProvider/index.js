import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import LanguageProvider from './component'
import { makeSelectLocale } from './selectors'

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
)

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider)
