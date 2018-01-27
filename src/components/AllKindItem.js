import React from 'react'
import { Row, Col, List, Avatar, Icon } from 'antd'
import PropTypes from 'prop-types'
import { getCountBeginTime } from '@/util'
import { Link } from 'react-router-dom'

const ListItem = List.Item

const iconMap = {
  '0': {icon: '_juece_fangxiang', text: '更新目标', color: '#13c2c2'},
  '1': {icon: '_qizhi_xinnian', text: '完成目标', color: '#2fcc9a'},
  '2': {icon: 'jinzhi', text: '放弃目标', color: '#ff4d4f'},
  '3': {icon: '_mubiao_', text: '新增目标', color: '#40a9ff'}
}

const getItemInfo = (info) => {
  const { aimInfo, userInfo } = info
  const titleInfo = iconMap[info.aim_status]

  const content = info.aim_status === 3 ? aimInfo.aim_content : info.update_content
  return (
    <Row className='diff-item'>
      <Col span={2}>
        <svg className='font-icon' aria-hidden='true'>
          <use xlinkHref={`#icon-${titleInfo.icon}`} />
        </svg>
        <p className='tag-info' style={{color: titleInfo.color}}>/ {titleInfo.text}</p>
      </Col>
      <Col span={16} className='update-content'>
        <h3><Link to={`/aimsDetail/${aimInfo.id}`}>{aimInfo.aim_title}</Link></h3>
        <div><Icon type='pushpin' style={{color: titleInfo.color, marginRight: '6px'}} /> {content}</div>
      </Col>
      <Col span={6}>
        <Row>
          <Col span={12} className='user-img'>
            <Link to={`/userInfo/${userInfo.int_id}`}>
              <Avatar size='large' src={userInfo.avatar_url} />
            </Link>
          </Col>
          <Col span={12} className='user-info'>
            <Link to={`/userInfo/${userInfo.int_id}`}>
              <p>{userInfo.user_name}</p>
            </Link>
            <p className='time'>{getCountBeginTime(info.createdAt)}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const AllKindItem = ({info}) =>
  <ListItem>
    {getItemInfo(info)}
  </ListItem>

AllKindItem.propTypes = {
  info: PropTypes.object.isRequired
}

export default AllKindItem
