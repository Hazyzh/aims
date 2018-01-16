import UserInfo from '../components/UserInfo.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserBaseInfoHandler } from '@/actions/userInfo_action.js'

const mapStateToProps = ({userView}) => ({
  userInfo: userView.userInfo
})

const mapDispatchToProps = dispatch => ({
  getUserBaseInfoHandler: bindActionCreators(getUserBaseInfoHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
