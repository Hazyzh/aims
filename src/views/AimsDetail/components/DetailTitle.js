import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Avatar, Divider } from 'antd'
import moment from 'moment'
// 获取发布时间
export const getTimeInfo = time => {
  const begin = moment(time)
  const now = moment()
  let resText
  const years = now.diff(begin, 'months')
  if (years > 0) return moment(time).format('YYYY年MM月DD日')
  const duration = now.diff(begin, 'days')
  if (duration > 0) {
    resText = duration + '天'
  } else {
    const d = moment.duration(now.diff(begin))
    const hours = d.get('hours')
    const minutes = d.get('minutes')
    if (hours > 0) {
      resText = hours + '小时' + minutes ? minutes + '分钟' : ''
    } else {
      resText = minutes ? minutes + '分钟' : '1分种'
    }
  }
  return resText + '前'
}

const DetailTitle = ({aimDetailInfo, createUser}) =>
  <div className='aim-detail-title'>
    <Row>
      <Col span={16}>
        <h3>{aimDetailInfo.aim_title}</h3>
        <div>
          <span className='username'><a>{createUser.user_name}</a></span>
          <span className='aim-info'>
            <span>{getTimeInfo(aimDetailInfo.createdAt)}</span>
            <Divider type='vertical' />
            <span>{aimDetailInfo.read_counts}次点击</span>
          </span>
        </div>
      </Col>
      <Col span={8} className='head-img'>
        <Avatar
          className='item'
          size='large'
          shape='square'
          icon='user' />
      </Col>
    </Row>
  </div>

DetailTitle.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  createUser: PropTypes.object.isRequired
}

export default DetailTitle
