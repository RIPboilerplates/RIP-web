import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'

import LanguageProvider from './component'
import { makeSelectLocale } from './selectors'

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // LanguageProvider Actions
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider)
