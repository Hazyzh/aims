import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { getCountBeginTime } from '@/util'

const AimsList = ({dataResouce}) =>
  <div className='user-info-aims-box'>
    <List
      dataSource={dataResouce}
      itemLayout='horizontal'
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={
              <Link to={`/aimsDetail/${item.id}`}>
                <Icon type='bulb' className='icon' />
                {item.aimInfo.aim_title}
              </Link>
            }
            description={<span className='description'>{item.update_content}</span>} />
          <div className='time'>{getCountBeginTime(item.createdAt)}</div>
        </List.Item>
      )} />
  </div>

AimsList.propTypes = {
  dataResouce: PropTypes.array.isRequired
}

export default AimsList
