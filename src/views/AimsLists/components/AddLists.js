import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddLists extends Component {
  componentWillMount () {
    // this.props.fetchAimsList()
  }

  render () {
    return (
      <div>
        hello world
      </div>
    )
  }
}

AddLists.propTypes = {
  fetchAimsList: PropTypes.func.isRequired
}

export default AddLists
