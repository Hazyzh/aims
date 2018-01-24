import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AllkindLists from '../containers/AllkindLists.js'

class Dynamic extends Component {
  componentWillMount() {
    this.props.fetchData({
      initSearch: true
    })
  }
  render() {
    return (
      <div>
        <AllkindLists />
      </div>
    )
  }
}

Dynamic.propTypes = {
  fetchData: PropTypes.func.isRequired
}

export default Dynamic
