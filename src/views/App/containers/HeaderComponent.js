import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent.js'

const mapStateToProps = ({user}) => ({
  login: user.login,
  userInfo: user.userInfo
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
