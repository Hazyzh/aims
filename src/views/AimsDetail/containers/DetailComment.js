import DetailComment from '../components/DetailComment.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { detailFieldsChange, updateAimInfo } from '@/actions/aimDetail_action.js'

const mapStateToProps = ({aimDetail}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  updateContent: aimDetail.updateContent,
  loading: aimDetail.updateLoading,
  aimStatus: aimDetail.aimStatus
})

const mapDispatchToProps = dispatch => ({
  onFieldsChanged: bindActionCreators(detailFieldsChange, dispatch),
  updateAimInfo: bindActionCreators(updateAimInfo, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailComment)
