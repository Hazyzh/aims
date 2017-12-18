import TopSelect from '../components/TopSelect.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAimsState } from '@/actions/homeView_action.js'

const mapStateToProps = ({homeView}) => ({
  selected: homeView.aimsState
})

const mapDispatchToProps = dispatch => ({
  onSelect: bindActionCreators(changeAimsState, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TopSelect)
