import HeaderComponent from '../components/HeaderComponent.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFriendHandler } from '@/actions/userInfo_action.js'
import { mustLogin } from '@/util/tips.js'

const mapStateToProps = ({userView, user}) => ({
  userInfo: userView.userInfo,
  isSelf: user.userInfo.id === userView.userInfo.id,
  loading: userView.addLoading
})

const mapDispatchToProps = dispatch => ({
  addHandler: mustLogin(bindActionCreators(addFriendHandler, dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
