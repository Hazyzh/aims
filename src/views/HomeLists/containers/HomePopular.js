import { connect } from 'react-redux'
import HomePopular from '../components/HomePopular.js'
import { bindActionCreators } from 'redux'
import { getAimsChangeList } from '@/actions/homePopular_action.js'

const mapStateToProps = ({homePopular}) => ({
})

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(getAimsChangeList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePopular)
