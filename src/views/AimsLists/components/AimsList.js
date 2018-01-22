import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 列表
import Lists from '../containers/Lists.js'
// 顶层筛选框
import TopSelect from '../containers/TopSelect.js'

class aimsList extends Component {
  componentWillMount () {
    this.props.fetchAimsList()
  }

  render () {
    return (
      <div>
        <TopSelect />
        <Lists />
      </div>
    )
  }
}

aimsList.propTypes = {
  fetchAimsList: PropTypes.func.isRequired
}

export default aimsList
