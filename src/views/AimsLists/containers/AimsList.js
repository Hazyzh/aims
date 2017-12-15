import { connect } from 'react-redux'
import AimsList from '../components/AimsList.js'
import { bindActionCreators } from 'redux'
import { fetchAimsList } from '@/actions/homeView_action.js'

const mapStateToProps = ({homeView}) => ({
})

const mapDispatchToProps = dispatch => ({
  fetchAimsList: bindActionCreators(fetchAimsList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AimsList)
