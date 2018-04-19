/**
* LoginPage Redux connected component
*/
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signInAction } from 'redux/Auth'

import Component from './component'

const mapStateToProps = (state) => ({ // eslint-disable-line no-unused-vars
  // LoginPage state selectors
  // Once state is used remove eslint disable line above
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    signInAction,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
