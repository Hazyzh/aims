import React from 'react'
import { Spin } from 'antd'
import Timeline from '../containers/TimeLine.js'
import AimSteps from './AimSteps.js'
import DetailComment from '../containers/DetailComment.js'

const AimsDetail = ({ loading, aimDetailInfo }) =>
  <Spin
    spinning={loading}
    tip='加载详细信息中...' >
    <h3>{aimDetailInfo.aim_title}</h3>
    <p className='aims-deatil-content'>{aimDetailInfo.aim_content}</p>
    <Timeline />
    <AimSteps />
    <DetailComment />
  </Spin>

export default AimsDetail
