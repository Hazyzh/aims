import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '../containers/Lists.js'

class HomePopular extends Component {
  componentWillMount () {
    this.props.fetchData()
  }
  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}

HomePopular.propTypes = {
  fetchData: PropTypes.func.isRequired
}

export default HomePopular
