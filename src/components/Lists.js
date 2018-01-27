import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { List, Icon, Tag, Card, Avatar } from 'antd'
import { getTimeInfo } from '@/util'
import { Link } from 'react-router-dom'
import backgroundImage from './bg.png'
// 具体的按钮
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

const colors = [
  '#52c41a', '#52c41a', '#389e0d', '#237804', '#135200',
  '#ffc069', '#fa8c16', '#d46b08', '#ad4e00', '#873800',
  '#ffa39e', '#ff7875', '#cf1322', '#a8071a', '#5c0011',
  '#2fcc9a', '#6D7C85'
]

const getInfo = (aimStatus, itemTimeInfo) => {
  let color, text
  if (aimStatus === 0) {
    color = itemTimeInfo.proportion
    text = itemTimeInfo.isOver ? `超出 ${itemTimeInfo.lastDays} 天` : `剩余 ${itemTimeInfo.lastDays} 天`
  } else if (aimStatus === 1) {
    color = 15
    text = '已完成'
  } else if (aimStatus === 2) {
    color = 16
    text = '已放弃'
  }

  return { color, text }
}

// 渲染每一项的函数
const renderHandler = showHeadImg => item => {
  let itemTimeInfo = {}
  const aimStatus = item.aim_status
  if (aimStatus === 0) {
    itemTimeInfo = getTimeInfo(item)
  }
  const renderInfo = getInfo(aimStatus, itemTimeInfo)
  return (
    <List.Item
      key={item.title}
      actions={[<IconText type='star-o' text={item.watch_counts} />, <IconText type='like-o' text={item.praise_counts} />, <IconText type='message' text={item.inner_counts} />]}
      extra={
        <Card
          hoverable
          title={
            <div className='last-title'>
              <Icon type='bell' />
              <span className='title-times'>剩余时间</span>
            </div>
          }
          bodyStyle={{
            backgroundColor: colors[renderInfo.color],
            backgroundImage: 'url(' + backgroundImage + ')',
            width: '275px',
            backgroundSize: '100%'
          }} >
          <div className='last-days'>
            {renderInfo.text}
          </div>
        </Card>
      } >
      <List.Item.Meta
        title={<Link to={`/aimsDetail/${item.id}`}>{item.aim_title}</Link>}
        description={createDescription(item, showHeadImg)} />
      {item.aim_content}
    </List.Item>
  )
}

// 生成分页内容
const createPagination = (pagination, action) => !pagination ? null : ({
  ...pagination,
  onChange: (current) => action({current})
})

// 生成 description 内容
const createDescription = (item, showHeadImg) => (
  <div>
    {
      showHeadImg &&
      <span className='head-img'>
        <Link to={`/userInfo/${item.aimUser.int_id}`}>
          <Avatar src={item.aimUser.avatar_url} />
        </Link>
      </span>
    }
    <Tag color='rgba(14, 191, 140, 0.5)'>
      <Icon type='calendar' />
      <span className='title-times'>{moment(item.createdAt).format('YYYY/MM/DD')}</span>
    </Tag>
    <Tag color='rgba(255, 77, 79, 0.5)'>
      <Icon type='lock' />
      <span className='title-times'>{moment(item.aim_deadline).format('YYYY/MM/DD')}</span>
    </Tag>
  </div>
)

const Lists = ({aimsList, pagination, loading, fetchAimsList, showHeadImg}) =>
  <List
    itemLayout='vertical'
    size='large'
    className='aimsLists'
    pagination={createPagination(pagination, fetchAimsList)}
    loading={loading}
    dataSource={aimsList}
    renderItem={renderHandler(showHeadImg)} />

Lists.propTypes = {
  aimsList: PropTypes.array.isRequired,
  pagination: PropTypes.object,
  loading: PropTypes.bool,
  fetchAimsList: PropTypes.func,
  // 是否展示头像
  showHeadImg: PropTypes.bool
}

export default Lists
