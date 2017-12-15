import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Lists from '../containers/Lists.js'

class aimsList extends Component {
  componentWillMount () {
    this.props.fetchAimsList()
  }

  render () {
    return (
      <div className='aimsLists'>
        <Lists />
      </div>
    )
  }
}

aimsList.propTypes = {
  fetchAimsList: PropTypes.func.isRequired
}

export default aimsList
