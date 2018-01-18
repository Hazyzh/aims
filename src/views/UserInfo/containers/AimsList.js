import AimsList from '../components/AimsList.js'
import { connect } from 'react-redux'

const mapStateToProps = ({userView}) => ({
  dataResouce: userView.aimsLists
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AimsList)
