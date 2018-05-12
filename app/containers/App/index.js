/**
* App Redux connected component
*/

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { setRedirectUrlAction } from 'redux/Navigation'

import Component from './component'

const mapStateToProps = (state) => ({
  loggedIn: state.getIn(['auth', 'authenticated']),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setRedirectUrl: setRedirectUrlAction,
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))
