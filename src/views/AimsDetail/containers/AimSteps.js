import AimSteps from '../components/AimSteps.js'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

const mapStateToProps = ({aimDetail}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  aimDetailChangeList: aimDetail.aimDetailChangeList
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AimSteps)
