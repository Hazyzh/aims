import HeaderComponent from '../components/HeaderComponent.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFriendHandler } from '@/actions/userInfo_action.js'

const mapStateToProps = ({userView, user}) => ({
  userInfo: userView.userInfo,
  isSelf: user.userInfo.id === userView.userInfo.id,
  loading: userView.addLoading
})

const mapDispatchToProps = dispatch => ({
  addHandler: bindActionCreators(addFriendHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
