import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Avatar, Divider, Icon, Button } from 'antd'
import { getCountBeginTime } from '@/util'
import { Link } from 'react-router-dom'

const DetailTitle = ({aimDetailInfo, createUser, isPraise, isWatching, praiseOrAttentionHandler}) =>
  <div className='aim-detail-title'>
    <Row>
      <Col span={16}>
        <h3>{aimDetailInfo.aim_title}</h3>
        <div>
          <span className='username'><a>{createUser.user_name}</a></span>
          <span className='aim-info'>
            <span>{getCountBeginTime(aimDetailInfo.createdAt)}</span>
            <Divider type='vertical' />
            <span>{aimDetailInfo.read_counts}次点击</span>
          </span>
        </div>
      </Col>
      <Col span={8} className='head-img'>
        <div className='btn-box'>
          <Button
            size='small'
            type='primary'
            onClick={() => praiseOrAttentionHandler(1)}>
            <span>赞</span>
            <Divider type='vertical' />
            {isPraise ? <Icon type='like' /> : <Icon type='like-o' />}
          </Button>
          <Button
            size='small'
            onClick={() => praiseOrAttentionHandler(2)}>
            <span>关注</span>
            <Divider type='vertical' />
            {isWatching ? <Icon type='eye' /> : <Icon type='eye-o' />}
          </Button>
        </div>
        <Link to={`/userInfo/${aimDetailInfo.aimUser && aimDetailInfo.aimUser.int_id}`}>
          <Avatar
            className='item'
            size='large'
            shape='square'
            src={createUser.avatar_url} />
        </Link>
      </Col>
    </Row>
  </div>

DetailTitle.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  createUser: PropTypes.object.isRequired,
  isPraise: PropTypes.bool.isRequired,
  isWatching: PropTypes.bool.isRequired,
  praiseOrAttentionHandler: PropTypes.func.isRequired
}

export default DetailTitle
