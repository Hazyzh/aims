import AllkindLists from '@/components/AllkindLists.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDynamicList } from '@/actions/homeDynamic_action.js'

const mapStateToProps = ({homeDynamic}) => ({
  loading: homeDynamic.loading,
  dataSource: homeDynamic.dynamicList,
  pagination: homeDynamic.pagination
})

const mapDispatchToProps = dispatch => ({
  fetchHandler: bindActionCreators(fetchDynamicList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AllkindLists)
