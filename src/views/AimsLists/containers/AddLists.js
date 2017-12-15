import { connect } from 'react-redux'
import AddLists from '../components/AddLists.js'
// import { bindActionCreators } from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  fetchAimsList: () => { console.log(12) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddLists)
