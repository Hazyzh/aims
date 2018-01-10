import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserInfoHandler } from '@/actions/user_action.js'

import Oauth from '../components/Oauth.js'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  getUserInfoHandler: bindActionCreators(getUserInfoHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Oauth)
