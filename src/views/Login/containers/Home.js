import { connect } from 'react-redux'
// import { bindActionCreators } from "redux"

import Home from '../components/Home'

const mapStateToProps = ({test}) => {
  return ({
    a: test.a
  })
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
