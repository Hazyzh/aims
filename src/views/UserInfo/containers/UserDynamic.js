import AllkindLists from '@/components/AllkindLists.js'
import { connect } from 'react-redux'

const mapStateToProps = ({userView}) => ({
  dataSource: userView.dynamidLists,
  loading: false
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AllkindLists)
