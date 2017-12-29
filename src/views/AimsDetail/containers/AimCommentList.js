import AimCommentList from '../components/AimCommentList.js'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

const mapStateToProps = ({aimDetail, user}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  userInfo: user.userInfo,
  lists: aimDetail.aimCommentList,
  loading: aimDetail.getCommentLoading
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AimCommentList)
