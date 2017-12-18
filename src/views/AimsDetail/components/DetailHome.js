import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AimsDetail from '../containers/AimsDetail.js'

class DetailHome extends Component {
  componentWillMount() {
    const { match: { params } } = this.props
    this.props.getDetailInfo(params)
  }
  render() {
    return (
      <AimsDetail />
    )
  }
}

DetailHome.propTypes = {
  getDetailInfo: PropTypes.func.isRequired
}

export default DetailHome
