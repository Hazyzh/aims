import AllkindLists from '@/components/AllkindLists.js'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { fetchDynamicList } from '@/actions/homeDynamic_action.js'

const mapStateToProps = ({homeDynamic}) => ({
  loading: homeDynamic.loading,
  dataSource: homeDynamic.dynamicList
})

const mapDispatchToProps = dispatch => ({
  // fetchData: bindActionCreators(fetchDynamicList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AllkindLists)
