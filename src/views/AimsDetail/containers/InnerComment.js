import InnerComment from '../components/InnerComment.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { innerAddAimComment } from '@/actions/aimDetail_action.js'

const mapStateToProps = ({aimDetail, user}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  userInfo: user.userInfo
})

const mapDispatchToProps = dispatch => ({
  addAimComment: bindActionCreators(innerAddAimComment, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(InnerComment)
