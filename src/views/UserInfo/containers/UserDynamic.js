import UserDynamic from '../components/UserDynamic.js'
import { connect } from 'react-redux'

const mapStateToProps = ({userView}) => ({
  dataResouce: userView.dynamidLists
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDynamic)
