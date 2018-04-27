/**
 * Exports the component for NotFoundPage
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from './component'

const mapStateToProps = (state) => ({ // eslint-disable-line no-unused-vars
  // NotFoundPage state selectors
  // Once state is used remove eslint disable line above
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)

