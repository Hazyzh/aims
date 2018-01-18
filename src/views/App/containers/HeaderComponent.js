import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent.js'
import { bindActionCreators } from 'redux'
import { logoutHandler } from '@/actions/user_action.js'
//
const mapStateToProps = ({user}) => ({
  login: user.login,
  userInfo: user.userInfo
})

const mapDispatchToProps = dispatch => ({
  logoutHandler: bindActionCreators(logoutHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
