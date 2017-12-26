import TimelineComponent from '../components/TimeLine.js'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

const mapStateToProps = ({aimDetail}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TimelineComponent)
