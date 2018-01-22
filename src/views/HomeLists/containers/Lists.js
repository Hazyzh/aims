import { connect } from 'react-redux'
import Lists from '../../AimsLists/components/Lists.js'
import { bindActionCreators } from 'redux'
import { getAimsChangeList } from '@/actions/homePopular_action.js'

const mapStateToProps = ({homePopular}) => ({
  aimsList: homePopular.aimsList,
  loading: homePopular.loading,
  pagination: homePopular.pagination
})

const mapDispatchToProps = dispatch => ({
  fetchAimsList: bindActionCreators(getAimsChangeList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
