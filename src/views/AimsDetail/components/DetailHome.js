import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AimsDetail from '../containers/AimsDetail.js'

class DetailHome extends Component {
  componentWillMount() {
    const { match: { params } } = this.props
    // 获取 aim 详情
    this.props.getDetailInfo(params)
    // 获取修改信息
    this.props.getAimsChangeList(params)
    // 获取评论信息
    this.props.getAimsComments(params)
  }
  render() {
    return (
      <AimsDetail />
    )
  }
}

DetailHome.propTypes = {
  getDetailInfo: PropTypes.func.isRequired,
  getAimsChangeList: PropTypes.func.isRequired,
  getAimsComments: PropTypes.func.isRequired
}

export default DetailHome
