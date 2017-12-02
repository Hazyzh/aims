import { connect } from 'react-redux'
// import { bindActionCreators } from "redux"

import Home from '../components/Home'

const mapStateToProps = ({test}) => {
  console.log(test.a)
  return ({
    a: test.a
  })
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
