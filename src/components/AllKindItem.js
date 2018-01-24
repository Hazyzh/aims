import React from 'react'
import { Row, Col, List, Avatar } from 'antd'
import PropTypes from 'prop-types'

const ListItem = List.Item

const getItemInfo = (info) => {
  const { aimInfo, userInfo } = info

  return (
    <Row className='diff-item'>
      <Col span={2}>
        <svg className='font-icon' aria-hidden='true'>
          <use xlinkHref='#icon-_mubiao_' />
        </svg>
        <p className='tag-info'>/ 新增aim</p>
      </Col>
      <Col span={18}>
        <h3>{aimInfo.aim_title}</h3>
        <p>{aimInfo.aim_content}</p>
      </Col>
      <Col span={4}>
        <Avatar src={userInfo.avatar_url} />
        <p>{userInfo.user_name}</p>
      </Col>
    </Row>
  )
}

const AllKindItem = ({info}) => {
  const { userInfo, aimInfo } = info
  if (info.aim_status === 3) {
    return (
      <ListItem>
        {getItemInfo(info)}
      </ListItem>
    )
  } else {
    return (
      <ListItem>
        <List.Item.Meta
          avatar={<Avatar src={userInfo.avatar_url} />}
          title={<a href='https://ant.design'>{aimInfo.aim_title}</a>}
          description={info.update_content} />
        <div>更新aims</div>
      </ListItem>
    )
  }
}

AllKindItem.propTypes = {
  info: PropTypes.object.isRequired
}

export default AllKindItem
