import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Avatar } from 'antd'
import { getTimeInfo } from './DetailTitle.js'
import InnerComment from '../containers/InnerComment.js'

const ComponentItem = ({info, clickHandler, stateMap}) =>
  <div className='aim-detail-comments-box'>
    <Row className='comment-content'>
      <Col span={24}>
        <p className='text'>
          {info.comment_content}
        </p>
      </Col>
      <Col span={12} className='info'>
        <span className='inner-comment' onClick={() => clickHandler({commentId: info.id, toggleState: !stateMap[info.id]})}>
          <Icon type='ellipsis' /> {info.inner_counts ? info.inner_counts : ''} 评论
        </span>
      </Col>
      <Col offset={4} span={2} className='head-img'>
        <a
          href={info.commentUserUrl}
          title={info.commentUserDes}>
          <Avatar
            shape='square'
            size='large' />
        </a>
      </Col>
      <Col span={6}>
        <a href={info.commentUserUrl}>
          {info.aimUser.user_name}
        </a>
        <p className='time'>{getTimeInfo(info.createdAt)}</p>
      </Col>
    </Row>
    {
      stateMap[info.id] && <InnerComment info={info} />
    }
  </div>

ComponentItem.propTypes = {
  info: PropTypes.object.isRequired,
  stateMap: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default ComponentItem
