import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Avatar } from 'antd'
import { getCountBeginTime } from '@/util'
import InnerComment from '../containers/InnerComment.js'
import { Link } from 'react-router-dom'

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
        <Link to={`/userInfo/${info.aimUser.int_id}`}>
          <Avatar
            shape='square'
            size='large'
            src={info.aimUser.avatar_url} />
        </Link>
      </Col>
      <Col span={6}>
        <Link to={`/userInfo/${info.aimUser.int_id}`}>
          {info.aimUser.user_name}
        </Link>
        <p className='time'>{getCountBeginTime(info.createdAt)}</p>
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
