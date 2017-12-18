import { connect } from 'react-redux'
import DetailHome from '../components/DetailHome.js'
import { bindActionCreators } from 'redux'
import { changeAimID } from '@/actions/aimDetail_action.js'

const mapStateToProps = ({addAims}) => ({
  loading: addAims.loading
})

const mapDispatchToProps = dispatch => ({
  getDetailInfo: bindActionCreators(changeAimID, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailHome)
