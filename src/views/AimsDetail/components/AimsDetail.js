import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Divider } from 'antd'
import Timeline from '../containers/TimeLine.js'
import AimSteps from '../containers/AimSteps.js'
import DetailComment from '../containers/DetailComment.js'
import DetailTitle from '../containers/DetailTitle.js'

const AimsDetail = ({ loading, aimDetailInfo }) =>
  <Spin
    spinning={loading}
    tip='加载详细信息中...' >
    <DetailTitle />
    <Divider />
    <p className='aims-deatil-content'>{aimDetailInfo.aim_content}</p>
    <Timeline />
    <AimSteps />
    <DetailComment />
  </Spin>

AimsDetail.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

export default AimsDetail
