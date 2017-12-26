import AimsDetail from '../components/AimsDetail.js'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

const mapStateToProps = ({aimDetail}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  loading: aimDetail.loading
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AimsDetail)
