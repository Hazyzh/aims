import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Divider } from 'antd'
import Timeline from '../containers/TimeLine.js'
import AimSteps from '../containers/AimSteps.js'
import DetailComment from '../containers/DetailComment.js'
import DetailTitle from '../containers/DetailTitle.js'
import AimComment from '../containers/AimComment.js'
import AimCommentList from '../containers/AimCommentList.js'

const AimsDetail = ({ loading, aimDetailInfo, userInfo }) =>
  <Spin
    spinning={loading}
    tip='加载详细信息中...' >
    <DetailTitle />
    <Divider className='aim-detail-divider' />
    <p className='aims-deatil-content'>{aimDetailInfo.aim_content}</p>
    <Timeline />
    <AimSteps />
    {
      aimDetailInfo.aim_status === 0 && userInfo.id === aimDetailInfo.user_id &&
      <DetailComment />
    }
    <Divider />
    <AimComment />
    <AimCommentList />
  </Spin>

AimsDetail.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired
}

export default AimsDetail
