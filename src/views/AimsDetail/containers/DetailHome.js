import { connect } from 'react-redux'
import DetailHome from '../components/DetailHome.js'
import { bindActionCreators } from 'redux'
import { changeAimID, getAimsChangeList } from '@/actions/aimDetail_action.js'

const mapStateToProps = ({addAims}) => ({
  loading: addAims.loading
})

const mapDispatchToProps = dispatch => ({
  getDetailInfo: bindActionCreators(changeAimID, dispatch),
  getAimsChangeList: bindActionCreators(getAimsChangeList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailHome)
