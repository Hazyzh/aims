import AimComment from '../components/AimComment.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAimComment, detailFieldsChange } from '@/actions/aimDetail_action.js'
import { mustLogin } from '@/util/tips.js'

const mapStateToProps = ({aimDetail, user}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  userInfo: user.userInfo,
  loading: aimDetail.addCommentLoading,
  addContent: aimDetail.addContent
})

const mapDispatchToProps = dispatch => ({
  addAimComment: mustLogin(bindActionCreators(addAimComment, dispatch)),
  onFieldsChanged: bindActionCreators(detailFieldsChange, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AimComment)
