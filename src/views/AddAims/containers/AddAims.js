import { connect } from 'react-redux'
import AddAims from '../components/AddAims'
import { bindActionCreators } from 'redux'
import { addHandler } from '@/actions/addAims_action.js'

const mapStateToProps = ({user, addAims}) => ({
  loading: addAims.loading,
  userInfo: user.userInfo
})

const mapDispatchToProps = dispatch => ({
  addHandler: bindActionCreators(addHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAims)
