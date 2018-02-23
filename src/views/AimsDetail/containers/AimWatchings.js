import AimWatchings from '../components/AimWatchings.js'
import { connect } from 'react-redux'

const mapStateToProps = ({aimDetail}) => ({
  aimDetailInfo: aimDetail.aimDetailInfo,
  watchingUsers: aimDetail.watchingUsers
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AimWatchings)
