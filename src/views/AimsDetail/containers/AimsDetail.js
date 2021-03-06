import AimsDetail from '../components/AimsDetail.js'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

const mapStateToProps = ({aimDetail, user}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  loading: aimDetail.loading,
  userInfo: user.userInfo
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AimsDetail)
