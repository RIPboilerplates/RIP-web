/**
* App Redux connected component
*/

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Component from './component'

const mapStateToProps = (state) => ({
  loggedIn: state.getIn(['auth', 'authenticated']),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // App Actions
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))
