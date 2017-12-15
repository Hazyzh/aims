import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { List, Icon, Tag, Card } from 'antd'
import { getTimeInfo } from '@/util'

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
  '#ffa39e', '#ff7875', '#cf1322', '#a8071a', '#5c0011'
]

// 渲染每一项的函数
const renderHandler = item => {
  const itemTimeInfo = getTimeInfo(item)

  return (
    <List.Item
      key={item.title}
      actions={[<IconText type='star-o' text='156' />, <IconText type='like-o' text='156' />, <IconText type='message' text='2' />]}
      extra={
        <Card
          hoverable
          title={
            <div className='last-title'>
              <Icon type='bell' />
              <span className='title-times'>剩余时间</span>
            </div>
          }
          bodyStyle={{ background: colors[itemTimeInfo.proportion], width: '275px' }} >
          <div className='last-days'>
            {itemTimeInfo.isOver ? `超出 ${itemTimeInfo.lastDays} 天` : `剩余 ${itemTimeInfo.lastDays} 天`}
          </div>
        </Card>
      } >
      <List.Item.Meta
        title={<a href={item.href}>{item.aim_title}</a>}
        description={createDescription(item)} />
      {item.aim_content}
    </List.Item>
  )
}

// 生成分页内容
const createPagination = (pagination, action) => ({
  ...pagination,
  onChange: (current) => action({current})
})

// 生成 description 内容
const createDescription = item => (
  <div>
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

const Lists = ({aimsList, pagination, loading, fetchAimsList}) =>
  <List
    itemLayout='vertical'
    size='large'
    pagination={createPagination(pagination, fetchAimsList)}
    loading={loading}
    dataSource={aimsList}
    renderItem={renderHandler} />

Lists.propTypes = {
  aimsList: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchAimsList: PropTypes.func.isRequired
}

export default Lists
