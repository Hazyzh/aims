import { connect } from 'react-redux'
import Lists from '../components/Lists.js'
import { bindActionCreators } from 'redux'
import { fetchAimsList } from '@/actions/homeView_action.js'

const mapStateToProps = ({homeView}) => ({
  aimsList: homeView.aimsList,
  loading: homeView.getlistState,
  pagination: homeView.pagination
})

const mapDispatchToProps = dispatch => ({
  fetchAimsList: bindActionCreators(fetchAimsList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
