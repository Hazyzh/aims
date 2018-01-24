import Dynamic from '../components/Dynamic.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDynamicList } from '@/actions/homeDynamic_action.js'

const mapStateToProps = ({homeView}) => ({
})

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchDynamicList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dynamic)
