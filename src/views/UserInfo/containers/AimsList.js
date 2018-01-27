import { connect } from 'react-redux'
import Lists from '@/components/Lists.js'

const mapStateToProps = ({userView}) => ({
  aimsList: userView.aimsLists
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
