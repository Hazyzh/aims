import DetailTitle from '../components/DetailTitle.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { praiseOrAttentionHandler } from '@/actions/aimDetail_action.js'

const mapStateToProps = ({aimDetail}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  createUser: aimDetail.createUser,
  isPraise: aimDetail.isPraise,
  isWatching: aimDetail.isWatching
})

const mapDispatchToProps = dispatch => ({
  praiseOrAttentionHandler: bindActionCreators(praiseOrAttentionHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailTitle)
